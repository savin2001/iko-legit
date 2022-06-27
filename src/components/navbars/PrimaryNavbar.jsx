import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const PrimaryNavbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpenSearch = () => {
        setOpen(true);
    };
    const handleCloseSearch = () => {
        setOpen(false);
    };

    return (
        <div className="flex flex-col justify-center align-middle shadow fixed top-0 left-0  z-50 bg-base-100 w-full">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-2xl">
                        <span>Iko</span>
                        <span className="text-primary">Legit</span>
                    </a>
                </div>

                <div className="navbar-end">
                    <label className="swap swap-rotate">
                        <input type="checkbox" />
                        <div className="swap-on" onClick={handleOpenSearch}>
                            {/* <button
                                className="btn btn-ghost btn-circle"
                                // 
                            > */}
                            <AiOutlineClose className="h-5 w-5" />
                            {/* </button> */}
                        </div>
                        <div className="swap-off" onClick={handleCloseSearch}>
                            {/* <button
                                className="btn btn-ghost btn-circle"
                                // onClick={handleOpenSearch}
                            > */}
                            <AiOutlineSearch className="h-5 w-5" />
                            {/* </button> */}
                        </div>
                    </label>

                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm badge-primary indicator-item">
                                    8
                                </span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">
                                    8 Items
                                </span>
                                <span className="text-info">
                                    Subtotal: $999
                                </span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            <span className="badge badge-sm badge-primary indicator-item">
                                2
                            </span>
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://avatars.dicebear.com/api/adventurer/john.svg" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {open && (
                <div className="container py-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered border-primary rounded-full focus:ring-2 focus:ring-inset focus:ring-primary"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrimaryNavbar;