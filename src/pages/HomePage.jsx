import Button from "../components/Button";
import Card from "../components/Card";
import { useState, useEffect, useRef } from "react";
import Modal from "../components/Modal";
import documentService from "../services/document.service";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const [allDocuments, setAllDocuments] = useState([]);
  const inputRef = useRef(null);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await documentService.getAllDocuments();
      if (res.data) setAllDocuments(res.data);
    })();
  }, [refresh]);

  useEffect(() => {
    if (isOpenModal) inputRef.current.focus();
  }, [isOpenModal]);

  const handleSumit = async () => {
    const res = await documentService.createDocument({
      name: fileName,
      data: "",
    });
    if (res) {
      navigate(`/editor`, { state: { id: res.data._id } });
      setRefresh((prev) => !prev);
      setFileName("");
      setIsOpenModal(false);
    }
  };

  return (
    <div className="flex flex-col mb-6">
      <Modal
        isOpen={isOpenModal}
        close={() => {
          setIsOpenModal(false);
          setFileName("");
        }}
        submit={handleSumit}
        title={"Create Document"}
      >
        <div className="mt-4 mb-1">
          <input
            ref={inputRef}
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-lg text-center"
            placeholder="Please enter file name..."
            value={fileName}
            onChange={(e) => {
              setFileName(e.target.value);
            }}
          />
        </div>
      </Modal>

      <div className="flex justify-end">
        <Button
          className={" bg-slate-400"}
          onClick={() => setIsOpenModal(true)}
        >
          +
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-3">
        {allDocuments?.map((i) => (
          <Card
            key={i?._id}
            title={i?.name}
            id={i?._id}
            setRefresh={setRefresh}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
