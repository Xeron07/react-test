interface Props {
  userList: IUser[];
}

const UserList: React.FC<Props> = ({ userList }) => {
  const generateUserTable = () => {
    if (!!userList && userList.length < 1) {
      return (
        <tr className='bg-gray-100'>
          <td
            className='whitespace-nowrap px-3 py-4 text-sm text-red-500 text-center'
            colSpan={3}>
            No User Added
          </td>
        </tr>
      );
    } else {
      return userList.map((user: IUser, index: number) => {
        return (
          <tr className='bg-gray-50'>
            <td className='whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900'>
              {index + 1}
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-700'>
              {user.name}
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-700'>
              {user.email}
            </td>
          </tr>
        );
      });
    }
  };
  return (
    <div className='mt-4 ml-auto mr-auto p-4'>
      <table className=' min-w-full divide-y divide-gray-300 '>
        <thead className='bg-gray-200'>
          <tr>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
              Rank
            </th>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
              Name
            </th>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
              Email
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {generateUserTable()}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
