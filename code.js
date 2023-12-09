const passwords = document.querySelectorAll(".password")
const errorMessage = document.querySelector("#error-message")
console.log(passwords, errorMessage)
passwords.forEach((el) => {
	el.addEventListener("blur", ()=>{
		const p1 = passwords[0].value
		const p2 = passwords[1].value
		if(p1 !== p2){
			passwords[0].classList.add("error")
			passwords[1].classList.add("error")
			errorMessage.style.visibility = "visible"
		}
		
	})
	el.addEventListener("input", ()=>{
		const p1 = passwords[0].value
		const p2 = passwords[1].value
		if(p1 === p2){
			passwords[0].classList.remove("error")
			passwords[1].classList.remove("error")
			errorMessage.style.visibility = "hidden"
		}
	})
})