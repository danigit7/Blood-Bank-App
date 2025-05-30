import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Droplet, AlertCircle, CheckCircle, Loader } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const Donate = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: currentUser?.displayName || "",
    gender: "",
    age: "",
    bloodGroup: "",
    city: "",
    phone: "",
    medicalInfo: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const { name, gender, age, bloodGroup, city, phone } = formData;
    if (!name || !gender || !age || !bloodGroup || !city || !phone) {
      setError("Please fill in all required fields");
      return;
    }

    if (isNaN(age) || parseInt(age) < 18 || parseInt(age) > 65) {
      setError("Age must be between 18 and 65");
      return;
    }

    try {
      setIsLoading(true);

      await addDoc(collection(db, "donors"), {
        ...formData,
        userId: currentUser.uid,
        createdAt: new Date().toISOString(),
      });

      setSuccess(true);

      setFormData({
        name: currentUser?.displayName || "",
        gender: "",
        age: "",
        bloodGroup: "",
        city: "",
        phone: "",
        medicalInfo: "",
      });

      setTimeout(() => {
        navigate("/donors");
      }, 2000);
    } catch (err) {
      console.error("Error registering as donor:", err);
      setError("Failed to register as donor. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <div className="text-center mb-8">
                <Droplet className="h-12 w-12 text-red-700 mx-auto" />
                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                  Become a Blood Donor
                </h2>
                <p className="mt-2 text-gray-600">
                  Fill in your details to register as a blood donor and help
                  save lives
                </p>
              </div>

              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-md flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-md flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <p className="text-sm text-green-700">
                    You have successfully registered as a donor! Redirecting...
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    >
                      <option value="" disabled>
                        Select gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="age"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age * (18-65)
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="18"
                      max="65"
                      value={formData.age}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bloodGroup"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Blood Group *
                    </label>
                    <select
                      id="bloodGroup"
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    >
                      <option value="" disabled>
                        Select blood group
                      </option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City/Location *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="medicalInfo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Medical Information (Optional)
                  </label>
                  <textarea
                    id="medicalInfo"
                    name="medicalInfo"
                    rows="3"
                    value={formData.medicalInfo}
                    onChange={handleChange}
                    placeholder="Any medical conditions, medications, or other relevant health information"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  ></textarea>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isLoading || success}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
                        Registering...
                      </span>
                    ) : success ? (
                      <span className="flex items-center">
                        <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                        Registration Successful
                      </span>
                    ) : (
                      "Register as Donor"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;