
const CreateProduct = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 p-5">

                <div className="w-full max-w-3xl bg-white p-6 md:p-8 rounded-2xl shadow-lg">

                    {/* Back */}
                    <p className="text-sm text-gray-500 mb-2 text-center cursor-pointer">← Back To Products</p>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Create <span className="text-primary">A Product</span>
                    </h1>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Title */}
                        <input type="text" placeholder="Title" className="input input-bordered w-full" />

                        {/* Category */}
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select a Category</option>
                            <option>Beverage</option>
                            <option>Electronics</option>
                        </select>

                        {/* Min Price */}
                        <input type="number" placeholder="Min Price ($)" className="input input-bordered w-full" />

                        {/* Max Price */}
                        <input type="number" placeholder="Max Price ($)" className="input input-bordered w-full" />

                        {/* Condition */}
                        <div className="flex items-center gap-4 col-span-1 md:col-span-2">
                            <span className="text-sm">Condition:</span>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="condition" className="radio radio-primary" />
                                Brand New
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="condition" className="radio radio-primary" />
                                Used
                            </label>
                        </div>

                        {/* Usage */}
                        <input type="text" placeholder="Usage time (e.g. 1 year)" className="input input-bordered w-full" />

                        {/* Product Image */}
                        <input type="text" placeholder="Product Image URL" className="input input-bordered w-full" />

                        {/* Seller Name */}
                        <input type="text" placeholder="Seller Name" className="input input-bordered w-full" />

                        {/* Seller Email */}
                        <input type="email" placeholder="Seller Email" className="input input-bordered w-full" />

                        {/* Contact */}
                        <input type="text" placeholder="Seller Contact" className="input input-bordered w-full" />

                        {/* Seller Image */}
                        <input type="text" placeholder="Seller Image URL" className="input input-bordered w-full" />

                        {/* Location */}
                        <input type="text" placeholder="Location (City, Country)" className="input input-bordered w-full md:col-span-2" />

                        {/* Description */}
                        <textarea placeholder="Product Description..." className="textarea textarea-bordered w-full md:col-span-2"></textarea>

                        {/* Button */}
                        <button
                            type="submit"
                            className="md:col-span-2 py-3 rounded-lg text-white font-semibold bg-primary hover:opacity-90"
                        >
                            Create A Product
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;