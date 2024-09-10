document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const postsContainer = document.getElementById('postsContainer');

    // Load posts
    function loadPosts() {
        fetch('/posts')
            .then(response => response.json())
            .then(posts => {
                postsContainer.innerHTML = '';
                posts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.classList.add('post');
                    postDiv.textContent = post.content;
                    postsContainer.appendChild(postDiv);
                });
            });
    }

    // Handle form submission
    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const content = postContent.value.trim();

        if (content) {
            fetch('/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content }),
            })
            .then(response => response.json())
            .then(() => {
                postContent.value = '';
                loadPosts();
            });
        }
    });

    // Initial load of posts
    loadPosts();
});