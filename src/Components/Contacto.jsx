import React from "react";
import { Mail, Phone, User } from "lucide-react";

const Contactos = () => {
  return (
    <section id="contacto" className="py-16 text-white text-center bg-gray-900">
      <h2 className="text-3xl font-bold mb-10">Contacto</h2>
      <div className="max-w-xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-center space-x-4 bg-white/10 p-4 rounded-xl shadow-md">
          <User className="text-blue-400" />
          <p className="text-lg font-medium">Romel Israel Romero Olmos</p>
        </div>
        <div className="flex items-center justify-center space-x-4 bg-white/10 p-4 rounded-xl shadow-md">
          <Phone className="text-green-400" />
          <p className="text-lg font-medium">0960063060</p>
        </div>
        <div className="flex items-center justify-center space-x-4 bg-white/10 p-4 rounded-xl shadow-md">
          <Mail className="text-yellow-400" />
          <p className="text-lg font-medium">romelsiyo2@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
