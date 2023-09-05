const quote = document.getElementById('quote');
const author = document.getElementById('author');
const random_btn = document.getElementById('random_btn');
const modal_container = document.querySelector('.modal-container');

//API URLs
const random_quote = 'http://api.quotable.io/random';

random_btn.addEventListener('click', () => {
    getRandomQuote(random_quote);
});


//Get random anime quote
function getRandomQuote(url){
    random_btn.disabled = true;
    random_btn.innerHTML = "Loading... <i class='bx bx-loader-circle bx-sm'></i>";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
        random_btn.disabled = false;
        random_btn.innerHTML = "Random Quote <i class='bx bxs-dice-4 bx-sm'></i>";
        console.log(data);
    }).catch(error => alert(error));
}
getRandomQuote(random_quote);

//check if window size is small

if (window.innerWidth < 440) {
    random_btn.innerHTML = "<i class='bx bxs-dice-4 bx-sm'></i>";
}

//modal functionality
function opnenModal(message, title, buttonText) {
    document.querySelector('body').innerHTML += `
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
  
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
        <div class="relative bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
          <div class="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <!-- Heroicon name: outline/exclamation -->
                <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-300" id="modal-title">
                    ${title}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    ${message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm close-modal">
                ${buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
        document.querySelector('.relative').style.display = 'none';
        window.location.reload();
    });
}