export default function(containerId) {
  // get the container to by html ID
  let container = document.getElementById(containerId);
  // scroll the container to the bottom
  setTimeout(() => { container.scrollTop = container.scrollHeight; }, 300 );
}
