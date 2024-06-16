import { useEffect, useState } from "react";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import { useUpdateVideoMutation } from "../../feature/api/apiSlice";
import Success from "../ui/Success";


export default function Form({ video }) {
    const [updateVideo, { isSuccess, isError }] = useUpdateVideoMutation()

    const [form, setForm] = useState({

        "title": "",
        "description": "",
        "author": "",
        "date": "",
        "duration": "",
        "views": "",
        "link": "",
        "thumbnail": ""
    },)


    const onChangeHandler = (key, value) => {
        setForm((prevForm) => ({ ...prevForm, [key]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        updateVideo({ id: video.id, data: form })
    }

    useEffect(() => {
        setForm(video)
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput value={form.title} onChange={(e) => onChangeHandler('title', e.target.value)} title="Video Title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput value={form.author} onChange={(e) => onChangeHandler('author', e.target.value)} title="Author" />
                        </div>

                        <div className="col-span-6">
                            <TextArea value={form.description} onChange={(e) => onChangeHandler('description', e.target.value)} title="Description" />
                        </div>

                        <div className="col-span-6">
                            <TextInput value={form.link} onChange={(e) => onChangeHandler('link', e.target.value)} title="YouTube Video link" />
                        </div>

                        <div className="col-span-6">
                            <TextInput value={form.thumbnail} onChange={(e) => onChangeHandler('thumbnail', e.target.value)} title="Thumbnail link" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput value={form.date} onChange={(e) => onChangeHandler('date', e.target.value)} title="Upload Date" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput value={form.duration} onChange={(e) => onChangeHandler('duration', e.target.value)} title="Video Duration" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput value={form.views} onChange={(e) => onChangeHandler('views', e.target.value)} title="Video no of views" />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>

                {isSuccess && <Success message="Video was added successfully" />}
            </div>
        </form>
    );
}







//     return (
//         <form action="#" method="POST">
//             <div className="shadow overflow-hidden sm:rounded-md">
//                 <div className="px-4 py-5 bg-white sm:p-6">
//                     <div className="grid grid-cols-6 gap-6">
//                         <div className="col-span-6 sm:col-span-3">
//                             <TextInput title="Video Title" />
//                         </div>

//                         <div className="col-span-6 sm:col-span-3">
//                             <TextInput title="Author" />
//                         </div>

//                         <div className="col-span-6">
//                             <TextArea title="Description" />
//                         </div>

//                         <div className="col-span-6">
//                             <TextInput title="YouTube Video link" />
//                         </div>

//                         <div className="col-span-6">
//                             <TextInput title="Thumbnail link" />
//                         </div>

//                         <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//                             <TextInput title="Upload Date" />
//                         </div>

//                         <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                             <TextInput title="Video Duration" />
//                         </div>

//                         <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                             <TextInput title="Video no of views" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                     <button
//                         type="submit"
//                         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </form>
//     );
// }
