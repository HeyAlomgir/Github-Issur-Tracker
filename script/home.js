const issueGridd = document.getElementById("issue-grid");
const cardCount = document.getElementById("cardCount");

async function loadIssues() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    const issue = data.data;

    cardCount.innerText = issue.length;

    issueGridd.innerHTML="";
    issue.forEach(issu => {
              const borderColor = issu.status.toLowerCase() === 'open' ? 'border-t-green-500' : 'border-t-purple-500';

          const card = document.createElement('div');
        card.className = `card bg-base-100 shadow-xl border-t-3 ${borderColor} p-4`;
        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h2 class="font-bold text-lg">${issu.title}</h2>
                <span class="badge badge-xs bg-gray-200">${issu.priority}</span>
            </div>

            
            <p class="text-[16px] text-gray-500 mb-4 line-clamp-2">${issu.description.slice(0, 70)}</p>

                    <div class="flex gap-2 mb-4">
                    <span class="badge badge-sm border-red-200 bg-red-50 text-red-600 font-bold px-3 py-3 rounded-full flex gap-1 items-center">
                        <i class="fa-solid fa-bug text-[10px]"></i> ${issu.labels[0]}
                    </span>
                    <span class="badge badge-sm border-orange-200 bg-orange-50 text-orange-600 font-bold px-3 py-3 rounded-full flex gap-1 items-center">
                        <i class="fa-solid fa-hand-holding-heart text-[10px]"></i> ${issu.labels[1]}
                    </span>
                </div>

                <div class="flex justify-between items-center text-[10px] font-bold">
                 <div>
                 <p> ${issu.author}</p>
                 <p> ${issu.assignee}</p>
                 </div>
               <div>
                  <p class="text-gray-400">${new Date(issu.createdAt).toLocaleDateString()}</p>
                    <p class="text-gray-400">${new Date(issu.updatedAt).toLocaleDateString()}</p>
               </div>
            </div>
           
        `;
        issueGridd.appendChild(card);

    });


 
}



// button color
const Btn = (status) => {
  const allBtn = document.getElementById("all-Btn")
  const openBtn = document.getElementById("open-Btn")
  const closeBtn = document.getElementById("close-Btn")
  if(status === "all"){
    allBtn.classList.add("btn-primary")
    openBtn.classList.remove("btn-primary")
    closeBtn.classList.remove("btn-primary")
  }
  else if(status === "open"){
    allBtn.classList.remove("btn-primary")
    openBtn.classList.add("btn-primary")
    closeBtn.classList.remove("btn-primary")
  }

  else{
    allBtn.classList.remove("btn-primary")
    openBtn.classList.remove("btn-primary")
    closeBtn.classList.add("btn-primary")
  }

 

}


loadIssues();






console.log("how");