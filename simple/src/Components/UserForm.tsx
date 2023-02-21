import React, { useState } from "react";
interface Props {
  onUserSubmit: (name: string, email: string) => void;
}

const UserForm: React.FC<Props> = ({ onUserSubmit }) => {
  const [uname, setUname] = useState<string>("");
  const [uemail, setEmail] = useState<string>("");
  return (
    <div className='border border-gray-200 rounded-md w-1/3 p-4 ml-auto mr-auto mt-10 mb-4'>
      <h2 className='text-center text-gray-700 '>User Form</h2>
      <div className='p-4'>
        <label htmlFor='uname'>Name</label>
        <div className='mt-1'>
          <input
            id='uname'
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            placeholder='Enter Name'
            className='mt-2 w-full p-2 border border-gray-200 rounded-md focus:border-blue-100 focus:ring-1 focus:ring-blue-100'
          />
        </div>
      </div>
      <div className='p-4 mt-1'>
        <label htmlFor='uemail'>Email</label>
        <div className='mt-1'>
          <input
            id='uemail'
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
            className='mt-2 w-full p-2 border border-gray-200 rounded-md focus:border-blue-100 focus:ring-1 focus:ring-blue-100'
          />
        </div>
      </div>
      <div className='p-4'>
        <button
          className=' w-full px-4 py-2 bg-green-400 text-white text-center rounded-md text-base hover:bg-green-500'
          onClick={() => {
            onUserSubmit(uname, uemail);
            setUname("");
            setEmail("");
          }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserForm;
