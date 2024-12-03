import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Form = () => {
    const formData = {
        name: '',
        email: '',
        password: '',
        conformPassword: '',
        select: 'Money',
        checkBox: false,
    };
    const [value, setValue] = useState(formData);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const submitHandle = (e) => {
        e.preventDefault();
        setError(true);
        if (
            value.name !== '' &&
            value.email !== '' &&
            value.password !== '' &&
            value.conformPassword !== '' &&
            value.select !== '' &&
            value.checkBox
        ) {
            console.log(value);
            setValue(formData);
            setError(false);

            Swal.fire({
                title: 'Done',
                text: 'Form submitted successfully!',
                icon: 'success',
                confirmButtonText: 'Good',
            });
        }
    };

    return (
        <div>
            <div className="">
                <div className="flex items-center justify-center h-screen">
                    <form action="" className="border border-solid border-black rounded-lg p-10">
                        <h2 className="text-center text-4xl font-semibold text-blue-400 pb-7">Login</h2>
                        <div>
                            <input
                                className="py-2 px-3 border border-solid border-blue-600 rounded-lg w-full max-w-[600px] outline-none"
                                value={value.name}
                                onChange={(e) => setValue({ ...value, name: e.target.value })}
                                type="text"
                                placeholder="Name"
                            />
                            <p className="text-red-500 text-base font-normal">
                                {error && !value.name && 'Name is required'}
                            </p>
                        </div>
                        <div className="mt-5">
                            <input
                                className="py-2 px-3 border border-solid border-blue-600 rounded-lg w-full max-w-[600px] outline-none"
                                type="email"
                                placeholder="Email"
                                value={value.email}
                                onChange={(e) => setValue({ ...value, email: e.target.value })}
                            />
                            <p className="text-red-500 text-base font-normal">
                                {error && !value.email && 'Email is required'}
                            </p>
                        </div>
                        <div className="mt-5">
                            <input
                                className="py-2 px-3 mb-3 border border-solid border-blue-600 rounded-lg w-full max-w-[600px] outline-none"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={value.password}
                                onChange={(e) => setValue({ ...value, password: e.target.value })}
                            />
                            <span
                                className="cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hidden' : 'Show'}
                            </span>
                            <p className="text-red-500 text-base font-normal">
                                {error && !value.password && 'Password is required'}
                            </p>
                        </div>
                        <div className="mt-5">
                            <input
                                className="py-2 px-3 border border-solid border-blue-600 rounded-lg w-full max-w-[600px] outline-none"
                                type="password"
                                placeholder="Confirm Password"
                                value={value.conformPassword}
                                onChange={(e) => setValue({ ...value, conformPassword: e.target.value })}
                            />
                            <p className="text-red-500 text-base font-normal">
                                {error && !value.conformPassword && 'Confirm password is required'}
                            </p>
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <select
                                value={value.select}
                                onChange={(e) => setValue({ ...value, select: e.target.value })}
                                className="cursor-pointer py-2 px-3 w-full bg-slate-950 text-white rounded-xl"
                            >
                                <option value="money">Featured</option>
                                <option value="power">New</option>
                                <option value="peace">Rating</option>
                            </select>
                        </div>
                        <div className="flex items-center mt-5">
                            <input
                                type="checkbox"
                                checked={value.checkBox}
                                onChange={(e) => setValue({ ...value, checkBox: e.target.checked })}
                            />
                            <p className="text-slate-700 pl-3">I accept</p>
                        </div>
                        <p className="text-red-500 text-base font-normal">
                            {error && !value.checkBox && 'You must accept the terms'}
                        </p>
                        <button
                            className="mt-5 border border-solid border-blue-600 py-3 px-10 w-full max-w-[600px] rounded-lg text-black transition-all ease-linear duration-200 "
                            onClick={submitHandle}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
