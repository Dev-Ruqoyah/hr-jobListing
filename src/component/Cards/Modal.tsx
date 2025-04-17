import React from "react";
import { Link } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  companyName: string;
  companyShortName: string;
  refs: {landing_page: string };
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  companyName,
  companyShortName,
  refs,
}) => {
  if (!isOpen) return null;

  const logoUrl = `https://logo.clearbit.com/${companyShortName}.com`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative animate-fadeIn border border-gray-200">
        {/* Close Button */}
        <button
          className="absolute top-4 right-5 text-gray-400 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close Modal"
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
          <img
            src={logoUrl}
            alt={`${companyName} logo`}
            className="w-14 h-14 object-contain rounded-md border border-gray-300 bg-gray-100"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/50";
            }}
          />
          <div>
            <h3 className="text-gray-600 text-sm font-medium">{companyName}</h3>
            <h2 className="text-xl md:text-2xl font-bold text-blue-600">{title}</h2>
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto text-gray-700 space-y-4 mb-6">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <Link to={refs?.landing_page} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition duration-300">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
