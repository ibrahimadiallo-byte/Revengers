const form = document.getElementById('post-form');
const nameInput = document.getElementById('name');
const categoryInput = document.getElementById('category');
const messageInput = document.getElementById('message');
const postFeed = document.getElementById('post-feed');

const STORAGE_KEY = 'community-helpboard-posts';

const loadPosts = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
};

const savePosts = (posts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

const createPostCard = (post) => {
  const card = document.createElement('article');
  card.className = 'post-card';

  const title = document.createElement('h3');
  title.textContent = post.name;

  const meta = document.createElement('span');
  meta.className = 'category';
  meta.textContent = post.category;

  const message = document.createElement('p');
  message.textContent = post.message;

  const repliesHeading = document.createElement('p');
  repliesHeading.textContent = 'Responses';

  const repliesList = document.createElement('div');
  repliesList.className = 'replies';

  const replies = Array.isArray(post.replies) ? post.replies : [];
  if (replies.length === 0) {
    const emptyReply = document.createElement('p');
    emptyReply.className = 'empty-state';
    emptyReply.textContent = 'No responses yet.';
    repliesList.appendChild(emptyReply);
  } else {
    replies.forEach((reply) => {
      const replyItem = document.createElement('p');
      const replyName = reply && reply.name ? reply.name : 'Anonymous';
      const replyMessage = reply && reply.message ? reply.message : String(reply || '');
      replyItem.textContent = `${replyName}: ${replyMessage}`;
      replyItem.style.margin = '8px 0 0';
      replyItem.style.padding = '10px 12px';
      replyItem.style.border = '1px solid rgba(0, 0, 0, 0.1)';
      replyItem.style.borderRadius = '10px';
      replyItem.style.background = 'rgba(255, 255, 255, 0.9)';
      replyItem.style.color = '#2c3e50';
      repliesList.appendChild(replyItem);
    });
  }

  const replyForm = document.createElement('form');
  replyForm.className = 'reply-form';

  const replyNameInput = document.createElement('input');
  replyNameInput.type = 'text';
  replyNameInput.name = 'reply-name';
  replyNameInput.placeholder = 'Your name';
  replyNameInput.required = true;

  const replyMessageInput = document.createElement('input');
  replyMessageInput.type = 'text';
  replyMessageInput.name = 'reply-message';
  replyMessageInput.placeholder = 'Write a response...';
  replyMessageInput.required = true;

  const replyButton = document.createElement('button');
  replyButton.type = 'submit';
  replyButton.textContent = 'Reply';

  replyForm.append(replyNameInput, replyMessageInput, replyButton);

  replyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const replyName = replyNameInput.value.trim();
    const replyMessage = replyMessageInput.value.trim();
    if (!replyName || !replyMessage) return;

    const posts = loadPosts();
    const index = posts.findIndex(
      (item) =>
        item.name === post.name &&
        item.category === post.category &&
        item.message === post.message
    );

    if (index === -1) return;
    if (!Array.isArray(posts[index].replies)) {
      posts[index].replies = [];
    }

    posts[index].replies.push({ name: replyName, message: replyMessage });
    savePosts(posts);
    renderPosts();
  });

  card.append(title, meta, message, repliesHeading, repliesList, replyForm);
  return card;
};

const renderPosts = () => {
  const posts = loadPosts();
  postFeed.innerHTML = '';

  if (posts.length === 0) {
    postFeed.innerHTML = '<p class="empty-state">No posts yet. Be the first to help your community!</p>';
    return;
  }

  posts.slice().reverse().forEach((post) => {
    postFeed.appendChild(createPostCard(post));
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const category = categoryInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !category || !message) {
    return;
  }

  const posts = loadPosts();
  posts.push({ name, category, message, replies: [] });
  savePosts(posts);

  form.reset();
  renderPosts();
});

renderPosts();
