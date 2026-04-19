import { Outlet } from "react-router";


const MyProducts = () => {
    return (
        <div className="min-h-screen p-5">
            <h1 className="text-center text-3xl pt-15 pb-10 font-bold">My Products: <span className="text-primary">10</span></h1>
            <div className="">
                <div className="overflow-x-auto border rounded-lg">
                    <table className="table w-full text-sm">

                        {/* Head */}
                        <thead className="bg-gray-100 text-gray-600">
                            <tr>
                                <th>SL No</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {[1, 2].map((item, index) => (
                                <tr key={index} className="hover">
                                    <td>{index + 1}</td>
                                    {/* Image */}
                                    <td>
                                        <div className="w-12 h-10 bg-gray-200 rounded"></div>
                                    </td>

                                    <td>Orange Juice</td>
                                    <td>Beverage</td>
                                    <td>$100</td>

                                    {/* Status */}
                                    <td>
                                        <span className="px-2 py-1 text-xs bg-yellow-400 text-black rounded">
                                            Pending
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="space-x-1 ">
                                        <button className="px-2 hover:bg-purple-600  py-1 text-xs bg-purple-500 text-white rounded">
                                            Edit
                                        </button>
                                        <button className="px-2 hover:bg-red-600 py-1 text-xs bg-red-500 text-white rounded">
                                            Delete
                                        </button>
                                        <button className="px-2 hover:border-green-600 py-1 text-xs border border-green-500 text-green-600 rounded">
                                            Make Sold
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyProducts;