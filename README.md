# cheesecakecat's corner

This is my personal site. Just a cozy space where I post stuff and things.

## Running locally

1. Get ruby and bundler
2. `bundle install`
3. `bundle exec jekyll serve`
4. Check `localhost:4000`

## Tweaking stuff

- CSS is in `assets/css/style.css`
- Main layout in `_layouts/default.html`
- Blog posts go in `blog/_posts` (format: `YYYY-MM-DD-whatever.md`)
- Post images go in `assets/images`
- Blog post front matter needs:
  ```md
  ---
  layout: post
  title: "Your Title Here"
  blog-tag: Whatever
  ---
  ```

## Writing posts

Posts support all the usual markdown stuff:
- Headers (# to ######)
- **Bold** and *italic*
- Code blocks with syntax highlighting
- Images
- Links
- Lists (duh)
- Tables
- Blockquotes

Plus some nice features:
- Auto-generated header links (hover to see them)
- Code block copy button

## Need help?

Just check out the style demo post to see all the available features. Or you know, ping me or something.
