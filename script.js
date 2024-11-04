// Testimonial carousel functionality remains the same
const testimonialText = document.querySelector('.testimonial-text');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'IT Specialist',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: "I've worked with literally hundreds of computer producers, and I have to say the top spot goes to these guys. Our computers were made and shipped within a week! Would greatly reccomend!"
    },
    {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'This company is amazing! They delivered the task exactly how we needed it. They go the extra mile to make sure you are happy with your project. I will surely work again with this company!.'
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: "This compnay has so many hard workers and helpful community very well. Nayem was responsive and delivered fantastic work. We'll definitely work with him again!"
    }
];

let idx = 0;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonialText.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx = (idx + 1) % testimonials.length;
}

setInterval(updateTestimonial, 10000);

// Form submission handling to show "Sent" message without page refresh
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector('.contact-page form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Display a temporary "Sent" message
            const sentMessage = document.createElement('p');
            sentMessage.textContent = "Sent";
            sentMessage.style.color = "green";
            sentMessage.style.fontWeight = "bold";
            sentMessage.style.textAlign = "center";

            // Append the message and reset the form
            contactForm.appendChild(sentMessage);
            contactForm.reset();

            // Remove the message after a few seconds
            setTimeout(() => {
                sentMessage.remove();
            }, 3000); // Message disappears after 3 seconds
        });
    }
});

// Expanding Panels JavaScript
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
