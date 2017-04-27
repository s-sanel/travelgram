module.exports = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex          : 10
  },
  content : {
    position                   : 'absolute',
    maxWidth: '900px',
    width: '70%',
    height: 'auto',
    // top                        : '40px',
    // left                       : '40px',
    // right                      : '40px',
    // bottom                     : '40px',
    top                        : '50%',
    left                       : '50%',
    right                      : 'auto',
    bottom                     : 'auto',
    marginRight                : '-50%',
    transform                  : 'translate(-50%, -50%)',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '2px',
    outline                    : 'none',
    padding                    : '1px',
    opacity                    : '0',
    transition                 : 'opacity 1s',
    zIndex                     : 11
  }
};
