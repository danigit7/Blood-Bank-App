import React from "react";
import { Phone, MapPin, User, Heart, AlertCircle } from "lucide-react";

const bloodGroupColors = {
  "A+": "bg-red-100 text-red-800",
  "A-": "bg-red-100 text-red-800",
  "B+": "bg-blue-100 text-blue-800",
  "B-": "bg-blue-100 text-blue-800",
  "AB+": "bg-purple-100 text-purple-800",
  "AB-": "bg-purple-100 text-purple-800",
  "O+": "bg-green-100 text-green-800",
  "O-": "bg-green-100 text-green-800",
};

const Card = ({ donor }) => {
  const { name, bloodGroup, gender, age, city, phone, medicalInfo } = donor;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <div className="flex items-center text-gray-600 mt-1">
              <User className="h-4 w-4 mr-1" />
              <span>
                {gender}, {age} years
              </span>
            </div>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{city}</span>
            </div>
          </div>

          <div
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              bloodGroupColors[bloodGroup] || "bg-gray-100 text-gray-800"
            }`}
          >
            {bloodGroup}
          </div>
        </div>

        {medicalInfo && (
          <div className="mb-4 p-3 bg-gray-50 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">{medicalInfo}</p>
          </div>
        )}

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-600">
            <Heart className="h-5 w-5 text-red-700 mr-2" />
            <span className="text-sm">Available to donate</span>
          </div>

          <a
            href={`tel:${phone}`}
            className="inline-flex items-center px-4 py-2 bg-red-700 hover:bg-red-800 text-white text-sm font-medium rounded-md transition-colors duration-300"
          >
            <Phone className="h-4 w-4 mr-1" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
