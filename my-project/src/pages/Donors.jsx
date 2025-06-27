import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, limit, startAfter, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import { Search, Filter, Loader } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [bloodGroupFilter, setBloodGroupFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination state
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5); // Show 5 donors per page
  const [lastVisible, setLastVisible] = useState(null);
  const [firstVisible, setFirstVisible] = useState(null);
  const [pageStack, setPageStack] = useState([]); // For going back
  const [totalDonors, setTotalDonors] = useState(0);

  const cities = [...new Set(donors.map((donor) => donor.city))].sort();

  // Fetch total count (for showing total and disabling next on last page)
  useEffect(() => {
    const fetchTotal = async () => {
      const querySnapshot = await getDocs(collection(db, "donors"));
      setTotalDonors(querySnapshot.size);
    };
    fetchTotal();
  }, []);

  // Fetch donors for current page
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setIsLoading(true);
        let q = query(collection(db, "donors"), orderBy("name"), limit(pageSize));
        if (lastVisible) {
          q = query(collection(db, "donors"), orderBy("name"), startAfter(lastVisible), limit(pageSize));
        }
        const querySnapshot = await getDocs(q);
        const donorsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDonors(donorsList);
        setFilteredDonors(donorsList);
        setFirstVisible(querySnapshot.docs[0]);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      } catch (err) {
        console.error("Error fetching donors:", err);
        setError("Failed to load donors. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchDonors();
    // eslint-disable-next-line
  }, [page]);

  // Filtering logic (applies to current page only)
  useEffect(() => {
    let results = [...donors];
    if (bloodGroupFilter) {
      results = results.filter((donor) => donor.bloodGroup === bloodGroupFilter);
    }
    if (cityFilter) {
      results = results.filter((donor) => donor.city === cityFilter);
    }
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      results = results.filter(
        (donor) =>
          donor.name.toLowerCase().includes(searchTermLower) ||
          donor.city.toLowerCase().includes(searchTermLower)
      );
    }
    setFilteredDonors(results);
  }, [bloodGroupFilter, cityFilter, searchTerm, donors]);

  const resetFilters = () => {
    setBloodGroupFilter("");
    setCityFilter("");
    setSearchTerm("");
  };

  // Pagination handlers
  const handleNext = () => {
    setPageStack((prev) => [...prev, firstVisible]);
    setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    const prevStack = [...pageStack];
    const prevFirst = prevStack.pop();
    setPageStack(prevStack);
    setLastVisible(prevFirst || null);
    setPage((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">
              Available Blood Donors
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Find compatible blood donors in your area
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by name or city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="sm:w-40">
                  <select
                    value={bloodGroupFilter}
                    onChange={(e) => setBloodGroupFilter(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 rounded-md"
                  >
                    <option value="">All Blood Types</option>
                    {bloodGroups.map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:w-40">
                  <select
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 rounded-md"
                  >
                    <option value="">All Locations</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={resetFilters}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader className="animate-spin h-8 w-8 text-red-700" />
              <span className="ml-2 text-gray-600">Loading donors...</span>
            </div>
          ) : error ? (
            <div className="bg-red-50 p-4 rounded-md text-center">
              <p className="text-red-700">{error}</p>
            </div>
          ) : filteredDonors.length === 0 ? (
            <div className="bg-gray-50 p-12 rounded-lg text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No donors found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or check back later.
              </p>
              {(bloodGroupFilter || cityFilter || searchTerm) && (
                <button
                  onClick={resetFilters}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <div>
              <div className="mb-4 text-gray-600">
                Showing {filteredDonors.length} of {totalDonors} donors
                {(bloodGroupFilter || cityFilter || searchTerm) &&
                  " with current filters"}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDonors.map((donor) => (
                  <Card key={donor.id} donor={donor} />
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={handlePrev}
                  disabled={page === 1}
                  className={`px-4 py-2 rounded-md border ${page === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  Previous
                </button>
                <span className="px-4 py-2">Page {page}</span>
                <button
                  onClick={handleNext}
                  disabled={page * pageSize >= totalDonors}
                  className={`px-4 py-2 rounded-md border ${(page * pageSize >= totalDonors) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donors;