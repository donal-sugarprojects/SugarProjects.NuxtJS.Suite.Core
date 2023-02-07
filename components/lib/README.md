# Components

## Section Component

```<sp-section container-size="large" section-colour="primary" section-size="small" background-image="https://via.placeholder.com/1920x1080" background-blend="overlay"></sp-section>```

### Options

- container-size (String)
- section-style (String) default: 'default'
- section-size (String)
- background-image (String)
- background-blend (String)

## Card Component

```<sp-card :item="item" btn-title="Read more" btn-style="primary" card-style="primary" size="small" image-position="top" is-image-lazy is-image-cover is-image-lightbox />```

### Options

- item (Object)
  - title (String)
  - image (Object)
    - title (String)
    - image (String)
    - url (String)
  - url (String)
- btn-title (String)
- btn-style (String) default: 'default', options: [default, primary, secondary, danger, info, link, text]
- card-style (String) default: 'default', options: [none, default, primary, secondary, danger, info]
- size (String) default: '', [small, large]
- image-position (String) default: 'top', options: [top, left, right, bottom]
- is-image-lazy (Boolean) default: true
- is-image-cover (Boolean) default: false, image-position: left | right will override this value to true
- is-image-lightbox (Boolean) default: false

### Slots

- header
- default
- footer

## Image Component

```<sp-image src="http://placeholder.com/600x400" link-url="http://example.com" alt="Example alt text" title="Example title text" is-cover is-lazy  />```

### Options

- src (String - required)
- link-url (String)
- alt (String)
- title (String)
- is-cover (Boolean) default: false
- is-lazy (Boolean) default: true
- is-lightbox (Boolean) default: false
