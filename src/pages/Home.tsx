import { useState } from "react";

import UploadDocumentModal from "../components/UploadDocumentModal";
import Button from "../components/UI/Button";

function Home() {
  const [showUploadModal, setShowUploadModal] = useState<boolean>(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <UploadDocumentModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
      />
      <Button type="primary" onClick={() => setShowUploadModal(true)}>
        Open Modal
      </Button>
    </div>
  );
}

export default Home;
