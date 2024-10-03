import React, { useState } from "react";
import Button from '@mui/material/Button';
import './BlogFrom.css'; // Import the CSS file
import axios from "axios";

const BlogForm = () => {
    const [fullName, setFullName] = useState("");
    const [category, setCategory] = useState("NO");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState(null); // Set the initial image to null
    const [title, setTitle] = useState("");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (fullName === "Subhash$707338" && category === "YES") {
            const formData = new FormData();

            // Append all form data including the image
            formData.append("image", image);
            formData.append("content", content);
            formData.append("author", author);
            formData.append("title", title);

            try {
                const response = await axios.post("http://localhost:8000/api/v2/blogs", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                console.log("Successfully created blog post:", response.data);
            } catch (error) {
                console.log("An error occurred:", error.message);
            }
        } else {
            console.log("Invalid User or category is not YES");
        }
    };

    return (
        <div className="blog-form-container">
            <div className="blog-form-page">
                <h2>Create a Blog Post</h2>

                <form className="blog-form" method="POST" onSubmit={handleSubmit}>
                    {/* Full Name Input */}
                    <label className="form-label">
                        <p>Full Name</p>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            style={{ height: "34px" }}
                            required
                        />
                    </label>
                    <br />

                    {/* Category Select */}
                    <label className="form-label">
                        <p>Do you want to add this blog?</p>
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={handleCategoryChange}
                            style={{ height: "34px" }}
                        >
                            <option value="NO">NO</option>
                            <option value="YES">YES</option>
                        </select>
                    </label>
                    <br />

                    {/* Title Input */}
                    <label className="form-label">
                        <p>Title</p>
                        <textarea
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ height: "40px", width: "450px" }}
                            required
                        />
                    </label>
                    <br />

                    {/* Content Input */}
                    <label className="form-label">
                        <p>Content</p>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            style={{ height: "100px", width: "450px" }}
                            required
                        />
                    </label>
                    <br />

                    {/* File Upload for Image */}
                    <label className="form-label">
                        <p>Add Image</p>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            style={{ height: "34px" }}
                            required
                        />
                    </label>
                    <br />

                    {/* Author Input */}
                    <label className="form-label">
                        <p>Author Name</p>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            style={{ height: "34px" }}
                            required
                        />
                    </label>
                    <br />

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
