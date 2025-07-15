import { useEffect, useState } from "react";

interface UserInfo {
  name: string;
  email: string;
  contact: string;
  [key: string]: string; // for flexibility
}

const ContactDetails = () => {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    // Replace this with actual fetch from Firebase/Express/etc
    const fetchUserData = async () => {
      // Simulate API fetch
      const response = await new Promise<UserInfo>((resolve) =>
        setTimeout(() => {
          resolve({
            name: "Nino Salaan",
            email: "nino@example.com",
            contact: "+63 912 345 6789",
          });
        }, 500)
      );

      setUser(response);
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <p className="text-gray-500">Loading user data...</p>;
  }

  return (
    <div className="rounded w-full">
      <h2 className="text-base my-3">Your contact details</h2>
      <div className="space-y-4">
        <div>
          <label className="text-[14px] text-black">Name</label>
          <input
            type="text"
            value={user.name}
            readOnly
            className="w-full mt-1 p-3 text-sm border border-gray-300 rounded-md bg-gray-100 text-gray-800"
          />
        </div>

        <div>
          <label className="text-[14px] text-black">Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full mt-1 p-3 text-sm border border-gray-300 rounded-md bg-gray-100 text-gray-800"
          />
        </div>

        <div>
          <label className="text-[14px] text-black">Contact Number</label>
          <input
            type="text"
            value={user.contact}
            readOnly
            className="w-full mt-1 p-3 text-sm border border-gray-300 rounded-md bg-gray-100 text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
