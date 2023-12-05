import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])
  const handleAddWork = (params) => {
    if (todos?.some(item => item.id === work?.replace(/\s/g, ''))) {
      toast.error('Công việc đã được thêm vào trước đó rồi!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!work || work.trim() === '') {
      toast.warning('Vui lòng nhập công việc trước khi thêm.', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setTodos(prev => [...prev, {id: work?.replace(/\s/g, ''), job: work}])
      setWork('')
      toast.success('Đã thêm công việc mới thành công!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  const handleDeleteWork = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }



  return (
    <>
      <div className="flex flex-col gap-8 h-screen justify-center items-center">
      <div className="flex gap-8">
        <input 
        type="text"
        className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
        value={work}
        onChange={e => setWork(e.target.value)}
        />
        <button
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white "
        onClick={handleAddWork}
        >
          Add
        </button>
      </div>
      <div>
        <h3 className="font-bold text-xl">Content: </h3>
        <ul>
          {todos?.map(item => {
            return (
              <li key={item.id} className="flex gap-10 items-center justify-between">
                <span className="my-2">{item.job}</span>
                <span 
                className="my-2 cursor-pointer p-2"
                onClick={() => handleDeleteWork(item.id)}
                >X</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    {/* Same as */}
    <ToastContainer />
    </>
  );
}

export default App;
