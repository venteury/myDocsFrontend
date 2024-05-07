import { useNavigate } from "react-router-dom";
import Delete from "../assets/delete.png";
import documentService from "../services/document.service";
import Marquee from "react-fast-marquee";

const Card = ({ title, id = null, setRefresh }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    console.log(id);
    const res = await documentService.deleteDocumentByID(id);
    if (res) {
      setRefresh((prev) => !prev);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div
        className="bg-gray-200 flex justify-center items-center h-48 flex-col"
        onClick={() => navigate(`/editor`, { state: { id } })}
      >
        <div className="flex justify-end w-full mr-8 ">
          {" "}
          <img
            src={Delete}
            className="w-6 h-6 "
            alt="delete"
            onClick={(e) => {
              handleDelete(id);
              e.stopPropagation();
            }}
          />
        </div>
        <svg
          width="120px"
          height="120px"
          viewBox="-102.4 -102.4 1228.80 1228.80"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M899.984 19.873h-3.452c-26.123 0-47.296 21.172-47.296 47.296v888.508c0 26.127 21.173 47.298 47.296 47.298h3.452c26.119 0 47.297-21.171 47.297-47.298V67.169c0-26.124-21.177-47.296-47.297-47.296z"
              fill="#4A5699"
            ></path>
            <path
              d="M132.643 19.873h-3.449c-26.12 0-47.296 21.172-47.296 47.296v888.508c0 26.127 21.177 47.298 47.296 47.298h3.449c26.123 0 47.299-21.171 47.299-47.298V67.169c0-26.124-21.176-47.296-47.299-47.296z"
              fill="#C45FA0"
            ></path>
            <path
              d="M899.463 19.873H129.194c-26.12 0-47.296 21.172-47.296 47.296v3.377c0 26.12 21.177 47.299 47.296 47.299h770.269c26.123 0 47.296-21.179 47.296-47.299v-3.377c0-26.124-21.173-47.296-47.296-47.296z"
              fill="#6277BA"
            ></path>
            <path
              d="M899.463 905.006H129.194c-26.12 0-47.296 21.17-47.296 47.29v3.381c0 26.127 21.177 47.298 47.296 47.298h770.269c26.123 0 47.296-21.171 47.296-47.298v-3.381c0-26.12-21.173-47.29-47.296-47.29z"
              fill="#C45FA0"
            ></path>
            <path
              d="M717.962 543.153H542.047c-26.121 0-47.298 21.175-47.298 47.297v3.724c0 26.123 21.177 47.293 47.298 47.293h175.915c26.121 0 47.297-21.17 47.297-47.293v-3.724c0-26.122-21.176-47.297-47.297-47.297z"
              fill="#E5594F"
            ></path>
            <path
              d="M689.268 198.849H513.355c-26.122 0-47.298 21.175-47.298 47.297v3.722c0 26.12 21.176 47.297 47.298 47.297h175.912c26.122 0 47.298-21.177 47.298-47.297v-3.722c0-26.122-21.175-47.297-47.297-47.297z"
              fill="#F0D043"
            ></path>
            <path
              d="M757.789 353.081H261.17c-26.121 0-47.297 21.172-47.297 47.296v3.377c0 26.121 21.177 47.299 47.297 47.299h496.619c26.121 0 47.296-21.178 47.296-47.299v-3.377c0-26.125-21.175-47.296-47.296-47.296z"
              fill="#E5594F"
            ></path>
            <path
              d="M762.638 726.225h-496.62c-26.12 0-47.294 21.18-47.294 47.301v3.377c0 26.12 21.174 47.3 47.294 47.3h496.62c26.122 0 47.296-21.18 47.296-47.3v-3.377c0-26.122-21.174-47.301-47.296-47.301z"
              fill="#6277BA"
            ></path>
            <path
              d="M355.734 543.328H281.41c-26.122 0-47.297 21.17-47.297 47.293v3.378c0 26.118 21.175 47.297 47.297 47.297h74.324c26.123 0 47.296-21.179 47.296-47.297v-3.378c0-26.123-21.174-47.293-47.296-47.293z"
              fill="#F39A2B"
            ></path>
            <path
              d="M334.85 248.006m-48.986 0a48.986 48.986 0 1 0 97.972 0 48.986 48.986 0 1 0-97.972 0Z"
              fill="#F39A2B"
            ></path>
          </g>
        </svg>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {" "}
          <Marquee
            pauseOnHover
            className={`w-full text-center text-blue-500 font-semibold `}
          >
            {title}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Card;
