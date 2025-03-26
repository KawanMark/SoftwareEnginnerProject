import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../UI/Button';
import { FiUpload, FiFileText } from 'react-icons/fi';

const TrainingContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Dropzone = styled.div`
  border: 2px dashed #ced4da;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(108, 99, 255, 0.05);
  }
`;

const FileList = styled.div`
  margin-top: 1.5rem;
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TrainingPanel = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...newFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <TrainingContainer>
      <Title>Treinar Chatbot</Title>
      <p>Envie arquivos para treinar seu chatbot personalizado</p>
      
      <Dropzone 
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById('file-upload').click()}
      >
        <FiUpload size={48} />
        <p>Arraste e solte arquivos aqui ou clique para selecionar</p>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </Dropzone>
      
      <Button>Iniciar Treinamento</Button>
      
      {files.length > 0 && (
        <FileList>
          <h3>Arquivos selecionados:</h3>
          {files.map((file, index) => (
            <FileItem key={index}>
              <FiFileText />
              {file.name} - {(file.size / 1024).toFixed(2)} KB
            </FileItem>
          ))}
        </FileList>
      )}
    </TrainingContainer>
  );
};

export default TrainingPanel;