import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heart, Users, Search, Droplet, ArrowRight, Info } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  const bloodCompatibility = {
    "O-": {
      canDonateTo: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
      universal: "donor",
    },
    "O+": { canDonateTo: ["O+", "A+", "B+", "AB+"] },
    "A-": { canDonateTo: ["A-", "A+", "AB-", "AB+"] },
    "A+": { canDonateTo: ["A+", "AB+"] },
    "B-": { canDonateTo: ["B-", "B+", "AB-", "AB+"] },
    "B+": { canDonateTo: ["B+", "AB+"] },
    "AB-": { canDonateTo: ["AB-", "AB+"] },
    "AB+": { canDonateTo: ["AB+"], universal: "recipient" },
  };

  const BloodTypeCard = ({ bloodType, data }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">{bloodType}</span>
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-800">{bloodType}</h3>
            {data.universal && (
              <span className="text-sm bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-2 py-1 rounded-full font-medium">
                Universal {data.universal}
              </span>
            )}
          </div>
        </div>
        <Droplet className="h-6 w-6 text-red-500" />
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-gray-700 flex items-center">
          <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
          Can donate to:
        </p>
        <div className="flex flex-wrap gap-2">
          {data.canDonateTo.map((type) => (
            <span
              key={type}
              className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // Stats state
  const [stats, setStats] = useState({
    donors: 0,
    livesSaved: 0,
    cities: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "donors"));
        const donorsList = querySnapshot.docs.map((doc) => doc.data());
        const donorCount = donorsList.length;
        const citySet = new Set(donorsList.map((d) => d.city && d.city.trim()).filter(Boolean));
        setStats({
          donors: donorCount,
          livesSaved: donorCount * 3, // Each donor can save up to 3 lives
          cities: citySet.size,
          loading: false,
        });
      } catch (err) {
        setStats((prev) => ({ ...prev, loading: false }));
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-red-700 text-white py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=1200&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center md:text-left md:w-2/3">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Donate Blood, Save Lives
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Every donation can save up to three lives. Join our community of
              donors and make a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {currentUser ? (
                <Link
                  to="/donate"
                  className="bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-md font-semibold transition-colors duration-300 text-center"
                >
                  Become a Donor
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-md font-semibold transition-colors duration-300 text-center"
                >
                  Register Now
                </Link>
              )}
              <Link
                to="/donors"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-700 px-6 py-3 rounded-md font-semibold transition-colors duration-300 text-center"
              >
                Find Donors
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform connects blood donors with those in need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Register
              </h3>
              <p className="text-gray-600">
                Create an account to join our community of blood donors and
                recipients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="h-8 w-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Become a Donor
              </h3>
              <p className="text-gray-600">
                Add your blood type and contact information to be listed as an
                available donor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Find Donors
              </h3>
              <p className="text-gray-600">
                Search for compatible blood donors by blood type and location
                when needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blood Compatibility Section */}
      <div className="py-20 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">
                Blood Type Compatibility
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Understanding blood type compatibility is crucial for safe
              transfusions. Each blood type has specific compatibility rules
              based on antigens and antibodies.
            </p>

            {/* Blood Groups Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-red-100">
              <div className="flex items-center justify-center mb-6">
                <Info className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Blood Group System
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Group A</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Has A antigen on red cells and B antibody in plasma
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Group B</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Has B antigen on red cells and A antibody in plasma
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">AB</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">
                      Group AB
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Has both A and B antigens, no A or B antibodies
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">O</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Group O</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    No A or B antigens, has both A and B antibodies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Blood Type Compatibility Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(bloodCompatibility).map(([bloodType, data]) => (
              <BloodTypeCard
                key={bloodType}
                bloodType={bloodType}
                data={data}
              />
            ))}
          </div>

          {/* Quick Reference */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Quick Reference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <Droplet className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800">
                    Universal Donor
                  </h4>
                </div>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-red-600">O-</span> can
                  donate to all blood types
                </p>
                <p className="text-sm text-gray-600">
                  Perfect for emergency situations when blood type is unknown
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800">
                    Universal Recipient
                  </h4>
                </div>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-purple-600">AB+</span> can
                  receive from all blood types
                </p>
                <p className="text-sm text-gray-600">
                  Can accept donations from any compatible donor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-red-700">
                {stats.loading ? "..." : stats.donors.toLocaleString()}
              </p>
              <p className="mt-2 text-lg text-gray-600">Registered Donors</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-700">
                {stats.loading ? "..." : stats.livesSaved.toLocaleString()}
              </p>
              <p className="mt-2 text-lg text-gray-600">Lives Saved</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-700">
                {stats.loading ? "..." : stats.cities.toLocaleString()}
              </p>
              <p className="mt-2 text-lg text-gray-600">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Your donation can save up to three lives. Join our community of
            blood donors today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {currentUser ? (
              <Link
                to="/donate"
                className="bg-red-700 text-white hover:bg-red-800 px-6 py-3 rounded-md font-semibold transition-colors duration-300"
              >
                Become a Donor
              </Link>
            ) : (
              <Link
                to="/register"
                className="bg-red-700 text-white hover:bg-red-800 px-6 py-3 rounded-md font-semibold transition-colors duration-300"
              >
                Register Now
              </Link>
            )}
            <Link
              to="/donors"
              className="bg-white text-red-700 border border-red-700 hover:bg-red-50 px-6 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              Find Donors
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;