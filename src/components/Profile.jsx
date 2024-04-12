import React, { useState } from "react";

const Profile = () => {
  const [donors, setDonors] = useState([
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, City, Country",
      totalDonation: 500,
      totalReward: 50,
      email: "johndoe@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Oak Ave, Town, Country",
      totalDonation: 300,
      totalReward: 30,
      email: "janesmith@example.com",
      phone: "987-654-3210",
    },
    {
        id: 3,
        name: "Nayandeep Jain",
        address: "456 Oak Ave, Town, India",
        totalDonation: 500,
        totalReward: 30,
        email: "janesmith@example.com",
        phone: "987-654-3210",
      },
      {
        id: 4,
        name: "Abhishek Kumawat",
        address: "456 Oak Ave, Town, India",
        totalDonation: 300,
        totalReward: 30,
        email: "janesmith@example.com",
        phone: "987-654-3210",
      },
    // Add more donors as needed
  ]);

  const handleDonation = (donorId, donationAmount) => {
    const updatedDonors = donors.map((donor) =>
      donor.id === donorId
        ? {
            ...donor,
            totalDonation: donor.totalDonation + donationAmount,
            totalReward: donor.totalReward + Math.floor(donationAmount / 10),
          }
        : donor
    );
    setDonors(updatedDonors);
  };

  const handleContactClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const filterDonors = (query) => {
    const filteredDonors = donors.filter((donor) => {
      const donorInfo = `${donor.name.toLowerCase()} ${donor.address.toLowerCase()} ${donor.email.toLowerCase()} ${donor.phone}`;
      return donorInfo.includes(query.toLowerCase());
    });
    return filteredDonors;
  };

  const sortDonorsByDonation = () => {
    const sortedDonors = [...donors].sort((a, b) => b.totalDonation - a.totalDonation);
    return sortedDonors;
  };

  return (
    <div className="profile-container">
      <h2>Donors Profile</h2>
      <br />

      {/* Search and filter options */}
      <div className="profile-controls">
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
          onChange={(e) => {
            const query = e.target.value;
            const filteredDonors = filterDonors(query);
            setDonors(filteredDonors);
          }}
        />
        {/* <button onClick={() => setDonors(sortDonorsByDonation())}>Sort by Donation</button> */}
      </div>

      {/* List of donors (displayed as a grid) */}
      <div className="donors-grid">
        {donors.map((donor) => (
          <div key={donor.id} className="donor-card">
            <h3>{donor.name}</h3>
            <p>ID: {donor.id}</p>
            <p>Address: {donor.address}</p>
            <p>Total Donation: ${donor.totalDonation}</p>
            <p>Total Reward Points: {donor.totalReward} points</p>

            {/* Donation button */}
            {/* <button onClick={() => handleDonation(donor.id, 50)}>Donate $50</button> */}

            {/* Contact button */}
            <button onClick={() => handleContactClick(donor.email)}>Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
