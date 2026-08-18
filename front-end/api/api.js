const API_URL = "https://miragen.onrender.com";

export async function enviarCurriculo(file, jobDescription) {

  const formData = new FormData();

  formData.append("file", file);
  formData.append("job_description", jobDescription);

  const response = await fetch(`${API_URL}/curriculo/envio`, {
    method: "POST",
    body: formData,
  });


  return await response.json();
}