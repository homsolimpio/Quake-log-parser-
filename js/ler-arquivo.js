let fileSelected;

function readFile() {
  console.log(`asasdasd`);
  fileSelected = document.getElementById('txtfiletoread');

  fileSelected.addEventListener('change', () => {
    const file = fileSelected.files[0];

    let fileReader = new FileReader();

    console.log(file);

    fileReader.onload = e => {
      console.log(`resultado: `, fileReader.result);

    };
    fileReader.readAsText(file);
  });
}
window.onload = readFile;