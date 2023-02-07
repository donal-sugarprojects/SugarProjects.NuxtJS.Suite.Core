# Helpers

Helpers are injected into the app context.

```javascript
export default {
  mounted(){
    this.$spSuite.addCartItem(item)
  },
  asyncData(context){
    context.app.$spSuite.addCartItem(item)
  }
}

```

## UIkit

Framework accessible via app context.

```javascript
export default {
  mounted(){
    const bodyTag = this.$uikit.uilt.$('body')
  },
  asyncData(context){
    const bodyTag = context.app.$uikit.uilt.$('body')
  }
}
```

**Add custom icons**

Register custom icons somewhere on app load. E.g. mounted

```javascript
const icons = {
  'email':
    '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path d="M10 .302C4.652.302.302 4.652.302 10c0 5.348 4.35 9.698 9.698 9.698a9.675 9.675 0 005.173-1.493l-.648-1.025A8.458 8.458 0 0110 18.486c-4.68 0-8.486-3.807-8.486-8.486 0-4.68 3.807-8.486 8.486-8.486 4.68 0 8.486 3.807 8.486 8.486v.606a1.82 1.82 0 01-1.818 1.819 1.82 1.82 0 01-1.819-1.819V6.363h-1.212v.464C12.747 5.808 11.455 5.15 10 5.15A4.855 4.855 0 005.15 10 4.855 4.855 0 0010 14.85c1.812 0 3.376-1.011 4.208-2.487a3.023 3.023 0 002.46 1.274c1.67 0 3.03-1.36 3.03-3.03V10c0-5.348-4.35-9.698-9.698-9.698zm0 13.335A3.64 3.64 0 016.363 10 3.64 3.64 0 0110 6.363 3.64 3.64 0 0113.637 10 3.64 3.64 0 0110 13.637z"/></svg>'
}
this.$uikit.icon.add(icons)
```

## Utilities

**convertMarkdown(markdown)**

Convert Markdown to HTML

**compareValues(key, order)**

Compare objects in array by key. Use case:
``` javascript
result.sort(this.$spSuite.compareValues('featured', 'desc'))
```

- formatDate(dateString, showTime)
  
Format date string to preset format.

- timeSince(dateString)
  
Return time since dateString occurred.