import { useState } from "react"
import { useAuth } from "../hooks/useAuth"

const ProfilePage = () => {
    const {updateUserInfo, currentUser} = useAuth()
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')

    const handleNameChange = (e)=> {
        setName(e.target.value)
        
    }
    const handlePhotoChange = (e)=> {
        setPhoto(e.target.value)
    }

    const handleProfileUpdate = ()=> {
        updateUserInfo(name, photo)
        console.log("Name", name);
        console.log("Photo", photo);
    }


    

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-[300px]">
                <h1>User: {currentUser.displayName}</h1>
                <p>Email: {currentUser.email}</p>
                <div >
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input onChange={(e)=> handleNameChange(e)} name="name" type="text" className="input" placeholder="Name" value={name} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        {/* <input onChange={(e)=> handlePhotoChange(e)} name="photo" type="url" className="input" placeholder="Photo URL" value={photo} /> */}
                        <input onChange={(e)=> handlePhotoChange(e)} name="photo" type="url" className="input" placeholder="Photo URL" value={photo} />
                    </fieldset>
                    <button onClick={handleProfileUpdate} className="mt-2 btn btn-accent">Update profile</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage