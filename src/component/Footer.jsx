import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-800 text-gray-300">

                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">SmartDeals</h2>
                        <p className="text-sm">
                            Find freelance services, jobs, and local marketplace deals easily in one place.
                        </p>
                    </div>

                    {/* Marketplace */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Marketplace</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">Browse Ads</li>
                            <li className="hover:text-white cursor-pointer">Post Ad</li>
                            <li className="hover:text-white cursor-pointer">Categories</li>
                            <li className="hover:text-white cursor-pointer">Pricing</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">About Us</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                        <p className="text-sm mb-4">Subscribe to get latest updates.</p>

                        <div className="flex bg-white rounded overflow-hidden mb-6 shadow-2xl">
                        <input
                            type="text"
                                placeholder="Your email"
                            className="w-full px-4 p-2 text-black outline-none"
                        />
                        <button className="btn px-4 bg-primary  text-white">
                            Subscribe 
                        </button>
                    </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 py-4 text-center text-sm">
                    © {new Date().getFullYear()} SmartDeals. All rights reserved.
                </div>

            </div>
        </div>
    );
};

export default Footer;