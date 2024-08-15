import Nav from "@/components/Nav";
import React from "react";

const InternalLayout = ({ children }) => {
  return (
    <div>
      <Nav />

      <div className="bg-gray-200 pb-10">{children}</div>
      {/* Footer */}
      <div className="flex justify-center items-center bg-black py-5">
        <p className="text-white font-bold text-2xl">
          Global Engineering Academy
        </p>
      </div>
    </div>
  );
};

export default InternalLayout;
