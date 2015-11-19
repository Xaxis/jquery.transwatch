# jquery.transwatch

## Summary

A jQuery plugin that acts as a wrapper for the JavaScript TransitionEvent interface.

## Author

Wil Neeley ( [@wilneeley](http://twitter.com/wilneeley) / [github.com](https://github.com/Xaxis) )

## Usage

Include `jquery.transwatch.min.js` after jQuery in your header or elsewhere on your page.

### Fire Callback on Transition End

```javascript
$('#elm').transwatch({
    onEnd: function(e) {
        console.log('transition end!', e);
    }
});
```

### Fire Callback on Transition End of Specific Property

```javascript
$('#elm').transwatch({
    transition: 'opacity',
    onEnd: function(e) {
        console.log('transition end!', e);
    }
});
```
