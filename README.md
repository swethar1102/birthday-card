# 💗 Birthday Card

A romantic interactive birthday card built with HTML, CSS, and JavaScript.

## Personalize it

Open `script.js` and change:

```js
const boyfriendName = "Your Favorite Person";
```

and replace the text inside:

```js
const birthdayMessage = `...`;
```

## Add your photos

The memories section currently uses placeholders.

To add your own images, create an `images` folder and put your photos inside it.

Then, in `index.html`, replace a placeholder like:

```html
<div class="photo-placeholder">
  <span>📸</span>
  <small>Your photo</small>
</div>
```

with:

```html
<img src="images/photo1.jpg" alt="A favorite memory">
```

You can add this CSS to make the images fit:

```css
.polaroid img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
```

## Run locally

You can simply open `index.html` in a browser.

For a more realistic local server, from this folder run:

```bash
python3 -m http.server 8000
```

Then visit:

`http://localhost:8000`

## Put it online

The easiest free option is GitHub Pages:

1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and your `images` folder.
3. Open the repository's **Settings → Pages**.
4. Set the source to your main branch.
5. GitHub will give you a public link you can send to him.

## Optional upgrades

You can add:
- A background song
- More photos
- A relationship timeline
- A countdown to his birthday
- A password/secret message
- A "reasons why I love you" section
- A hidden easter egg
