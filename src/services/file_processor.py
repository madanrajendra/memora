import os

class FileProcessor:
    def extract_text(self, file_path: str, file_type: str) -> str:
        """
        Extract text from a given file based on its type.
        Mock implementation for Phase 1.
        """
        if file_type.lower() == 'pdf':
            return f"Extracted mock text from PDF: {os.path.basename(file_path)}"
        elif file_type.lower() == 'txt':
            return f"Extracted mock text from TXT: {os.path.basename(file_path)}"
        else:
            raise ValueError(f"Unsupported file type: {file_type}")
