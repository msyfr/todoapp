import Todo from './components/Todo/Todo';

const App = () => {
    return (
        <div className="min-h-screen bg-blue-100 flex flex-col gap-4 items-center justify-center">
            <div className="w-full  bg-white max-w-md shadow-lg rounded-lg p-8 ">
                <h3 className='text-lg font-bold'> Hello ! Welcome to the Todo List App.</h3>
                <ul className="list-disc list-inside">
                    <li>I have integrated Tailwind CSS for better styling. </li>
                    <li> I have also added a Redux store  to manage the state of the app.</li>
                    <li> All api calls are handled in the api.js file.</li>
                    <li> The default Dockerfile runs the app on port 3000 usingn the dev server <span className='font-bold text-red-500'>
                        Which is not recommended for production</span>.</li>
                    <li> The _Dockerfile.prod file should be used to build the app for production instead. It runs the app on port 80 using nginx.</li>
                    <li>The backend is running on port 3001 and is using a sqlite database to store the data (for testing purposes).</li>
                    <li>All the db logic is handled in the <code className='bg-gray-100 p-1 rounded-md'>backend/db.js</code> file.</li>
                </ul>
            </div>
            <Todo />
        </div>
    );
}

export default App; 