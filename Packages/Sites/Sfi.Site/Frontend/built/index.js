function stickInParent(n){var e=function(n){var e="isFixed";n=n||".js-stickInParent";var t=document.querySelector(n);if(!t)return null;var i=t.parentElement;return function(n){n>i.offsetTop&&window.innerHeight>t.offsetHeight?t.classList.add(e):t.classList.remove(e)}}(n);e&&debouncedScroll(e)}function debouncedScroll(n){var e=0,t=!1;window.addEventListener("scroll",function(i){e=window.scrollY,t||window.requestAnimationFrame(function(){n(e),t=!1}),t=!0})}stickInParent();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zdGlja0luUGFyZW50LmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6WyJzdGlja0luUGFyZW50Iiwic2VsZWN0b3IiLCJ1cGRhdGUiLCJmaXhlZENsYXNzIiwibmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInNjcm9sbFBvc2l0aW9uIiwib2Zmc2V0VG9wIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkZWJvdW5jZWRTY3JvbGwiLCJjYWxsYmFjayIsImxhc3RLbm93blNjcm9sbFBvc2l0aW9uIiwiaXNUaWNraW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzY3JvbGxZIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxRQUFBQSxlQUFBQyxHQUNBLEdBQUFDLEdBQUEsU0FBQUQsR0FDQSxHQUFBRSxHQUFBLFNBQ0FGLEdBQUFBLEdBQUEsbUJBQ0EsSUFBQUcsR0FBQUMsU0FBQUMsY0FBQUwsRUFDQSxLQUFBRyxFQUNBLE1BQUEsS0FFQSxJQUFBRyxHQUFBSCxFQUFBSSxhQUVBLE9BQUEsVUFBQUMsR0FDQUEsRUFBQUYsRUFBQUcsV0FBQUMsT0FBQUMsWUFBQVIsRUFBQVMsYUFDQVQsRUFBQVUsVUFBQUMsSUFBQVosR0FFQUMsRUFBQVUsVUFBQUUsT0FBQWIsS0FHQUYsRUFDQUMsSUFDQWUsZ0JBQUFmLEdBSUEsUUFBQWUsaUJBQUFDLEdBQ0EsR0FBQUMsR0FBQSxFQUNBQyxHQUFBLENBRUFULFFBQUFVLGlCQUFBLFNBQUEsU0FBQUMsR0FDQUgsRUFBQVIsT0FBQVksUUFDQUgsR0FDQVQsT0FBQWEsc0JBQUEsV0FDQU4sRUFBQUMsR0FDQUMsR0FBQSxJQUdBQSxHQUFBLElDbkNBcEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdGlja0luUGFyZW50IChzZWxlY3Rvcikge1xuXHR2YXIgdXBkYXRlID0gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXHRcdHZhciBmaXhlZENsYXNzID0gJ2lzRml4ZWQnO1xuXHRcdHNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJy5qcy1zdGlja0luUGFyZW50Jztcblx0XHR2YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cdFx0aWYgKCFuYXYpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR2YXIgcGFyZW50ID0gbmF2LnBhcmVudEVsZW1lbnQ7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gKHNjcm9sbFBvc2l0aW9uKSB7XG5cdFx0XHRpZiAoc2Nyb2xsUG9zaXRpb24gPiBwYXJlbnQub2Zmc2V0VG9wICYmIHdpbmRvdy5pbm5lckhlaWdodCA+IG5hdi5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdFx0bmF2LmNsYXNzTGlzdC5hZGQoZml4ZWRDbGFzcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZShmaXhlZENsYXNzKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KShzZWxlY3Rvcik7XG5cdGlmICh1cGRhdGUpIHtcblx0XHRkZWJvdW5jZWRTY3JvbGwodXBkYXRlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZWJvdW5jZWRTY3JvbGwoY2FsbGJhY2spIHtcblx0dmFyIGxhc3RLbm93blNjcm9sbFBvc2l0aW9uID0gMDtcblx0dmFyIGlzVGlja2luZyA9IGZhbHNlO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XG5cdFx0bGFzdEtub3duU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRpZiAoIWlzVGlja2luZykge1xuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2FsbGJhY2sobGFzdEtub3duU2Nyb2xsUG9zaXRpb24pO1xuXHRcdFx0XHRpc1RpY2tpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpc1RpY2tpbmcgPSB0cnVlO1xuXHR9KTtcbn1cbiIsInN0aWNrSW5QYXJlbnQoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
