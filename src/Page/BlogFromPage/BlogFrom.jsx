import React, { useState } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { postData } from "../ConstantPage/ConstantPage";
import { userCreateBlog } from "../ConstantPage/Backend_URL";

const BlogForm = () => {
    const [fullName, setFullName] = useState("");
    const [category, setCategory] = useState("NO");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState(null); 
    const [title, setTitle] = useState("");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (fullName === "Subhash$707338" && category === "YES") {
            const formData = new FormData();

            formData.append("image", image);
            formData.append("content", content);
            formData.append("author", author);
            formData.append("title", title);

            try {
                const response = await axios.post(userCreateBlog, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                
                console.log("Successfully created blog post:", response.data);
                postData.push(response.data)
                console.log(postData);
            } catch (error) {
                console.log("An error occurred:", error.message);
            }
        } else {
            console.log("Invalid User or category is not YES");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-center text-gray-800 text-2xl mb-6">Create a Blog Post</h2>

                <form className="blog-form" method="POST" onSubmit={handleSubmit}>
                    {/* Full Name Input */}
                    <label className="flex flex-col mb-4">
                        <p className="font-bold text-gray-600 mb-2">Full Name</p>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </label>

                    {/* Category Select */}
                    <label className="flex flex-col mb-4">
                        <p className="font-bold text-gray-600 mb-2">Do you want to add this blog?</p>
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={handleCategoryChange}
                            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                            <option value="NO">NO</option>
                            <option value="YES">YES</option>
                        </select>
                    </label>

                    {/* Title Input */}
                    <label className="flex flex-col mb-4">
                        <p className="font-bold text-gray-600 mb-2">Title</p>
                        <textarea
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                            required
                        />
                    </label>

                    {/* Content Input */}
                    <label className="flex flex-col mb-4">
                        <p className="font-bold text-gray-600 mb-2">Content</p>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 resize-none h-24"
                            required
                        />
                    </label>

                    {/* File Upload for Image */}
                    <label className="flex flex-col mb-4">
                        <p className="font-bold text-gray-600 mb-2">Add Image</p>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </label>

                    {/* Author Input */}
                    <label className="flex flex-col mb-4">
                        <p className="font-bold text-gray-600 mb-2">Author Name</p>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </label>

                    {/* Submit Button */}
                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
