import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Roofing Repair',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', phone: '', service: 'Roofing Repair' });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#004AAC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
      
      <h3 className="text-2xl font-bold text-black mb-2 uppercase tracking-tight">Request an Estimate</h3>
      <p className="text-gray-600 mb-6 text-sm">Fill out the form below and we'll get back to you shortly.</p>
      
      {isSubmitted ? (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-center gap-3 font-medium">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          Thank you! We will contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#004AAC] focus:border-[#004AAC] outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Phone Number</label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#004AAC] focus:border-[#004AAC] outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="(318) 555-0123"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Service Needed</label>
            <select
              id="service"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#004AAC] focus:border-[#004AAC] outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option>Roofing Repair</option>
              <option>New Roof Installation</option>
              <option>Commercial Roofing</option>
              <option>Metal Roof Installation</option>
              <option>Siding & Gutters</option>
              <option>Steel Fabrication</option>
              <option>Other</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#004AAC] text-white py-4 px-6 rounded font-bold uppercase tracking-wide hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 group mt-2"
          >
            Get Free Estimate
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}
