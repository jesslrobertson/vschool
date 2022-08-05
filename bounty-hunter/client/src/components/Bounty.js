import React, { useContext, useState } from "react";
import { ApiContext } from "./Context";
import Form from "./Form";

export default function Bounty(props) {
  const { name, alignment, living, reward, _id, setEditToggle, editToggle } = props;
  const { updateBounty, deleteBounty } =
    useContext(ApiContext);
  // const [editToggle, setEditToggle] = useState(false)

  

  return (
      <div
        className="flex flex-col border-double border-cyan-300 border-4 rounded-lg min-h-[17rem] m-10 text-cyan-500 p-4 w-1/5 content-between"
        key={name}
      >
        {!editToggle ? (
          <>
            <h2 className="name">{name}</h2>
            <h3>Alignment: {alignment}</h3>
            <h3>{living ? "Alive" : "Dead"}</h3>
            <h3>Reward: {reward}</h3>
            <div className="flex flex-row">
              <button 
                onClick={() => setEditToggle((prevToggle) => !prevToggle)}
                >
                Edit
              </button>
              <button 
              onClick={() => deleteBounty(_id)}
              >Delete
              </button>
            </div>
          </>
        ) : (
          <>
            <Form
              name={name}
              alignment={alignment}
              living={living}
              reward={reward}
              _id={_id}
              submit={updateBounty}
              btnText="Update"
              setEditToggle={setEditToggle}
              flexDirection="col"
              button='flex-end'
            />
            <button 
              className="flex-end"
              onClick={() => setEditToggle((prevToggle) => !prevToggle)}
            >
                Close
            </button>
          </>
        )}
      </div>
  );
}
