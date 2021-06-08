var game;
var menuGroup;

window.onload = function() {
    game = new Phaser.Game(640, 960);
    game.state.add("Boot", boot);
    game.state.add("Preload", preload);
    game.state.add("GameTitle", gameTitle);
    game.state.start("Boot");
}

////////////////////////////////////////////////////////////////////////////////

var boot = function(game){};

boot.prototype = {
    preload: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setScreenSize = true;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#000000";
    },
    create: function(){
        game.state.start("Preload");
    }
}

////////////////////////////////////////////////////////////////////////////////

var preload = function(game){};

preload.prototype = {
    preload: function(){
        game.load.image("gametitle", "data:image/png;base64,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");
        game.load.image("gridedition", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdgAAAAUCAYAAAAuhCziAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFGRTlDMDc4NjEwNDExRTVBN0VDQzJDRDA1Rjk4N0NGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFGRTlDMDc5NjEwNDExRTVBN0VDQzJDRDA1Rjk4N0NGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUZFOUMwNzY2MTA0MTFFNUE3RUNDMkNEMDVGOTg3Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUZFOUMwNzc2MTA0MTFFNUE3RUNDMkNEMDVGOTg3Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uPqIrAAAEsUlEQVR42uydi5GiQBCGZ7dMgBS4ELgQMAQ2BDYEDEFC0BAkBAlBQtAQ1hA4pqpb2jlEHu5eD/d/VV1u6bo79Dz+7gaGt7quzQOSxsLGYvFe1dilsaKxq9FF/OD9SlFbQ7ILmYa2aPeZdvr8yGjo70fz40r9rRVud6m8jyXlf+6vPqyuRGTSX6XicRiP9Ge7zluBdSxp7Fz389VY1vHdf2l97BoLFLQxo/ZkitrSx6GxWFk/a7MhfsyUz4+a5nymZJ50tVt7H9dK2qqhDV2WDtCVo9L1xupdNGWdXznKu20sE1F34WQzkYhAtvTzWlm2IyMN286gsZReP5BwDcqu2G8J2b6xT7hqcpaqdX4Y6ueIIm6e/2vlWe1Pc+3wG88RVHues6M1mOfJXowvHn8pZYoxrTV7Re23bTxOmhdOhDE04k5I1Tk71BzpxqKtETLYwW0J6TNt/aw1g82Ut/NZZpNQBlFPiNj/x4yMfRUj4++1nRhTac/vBU6lIFXo0/PACs9tTXgXNeMt/Wyjh/yJLheUDV4V1/plxL5/ch4KdGdkuahQpCIKBcujoL7eU8R+gEvATDJaM65ibPVVCXJRKds552k1EFImGwz9Agssl1DLEam5/d1fNDF9KPGAaVQi4MrgjsWzoeAqREAFXiCwnLQNLa3uFa83exL9wSLLApvQaz7yH/oiXMhc55FTX4+9mhL4x1UE2RHcASaSmPYc9dgkLBd/Q9N68ylEdlCFZ0VOCI0f5d6xYsq3GfF7Bcb9ZEoa8LHRdQGCD0Fc5dncKhGYgplEM9Zc1qKY/s5F0XFxCdtWd3bmycWfK+GIpVw1eOxxzAXjfjKViEpBt8A+EqSNZwJbiQAVgDkCO1VXWGA1jkEpsqZPZFcvEi/LWsnBX0kE+LYJzh5KjHnwzVlf+USwAADLYGPa24v4gtBegR2SmfhQMrJCf6Lj2WBxAz8osDncAMAt0TEzMtDQg+NbU9K5NffXLtx4F1F3NEBk1x1mjK7Sa0XCao9lZ1DSfBWxwr4G39vXCE7BnHWYdWXOGNRceWSRrcz9Zhp3AiudkQyI0qUFSieizSQK0+44BeYRYNGFwAIwgkJoythslL9z8WAMuiIbdwksp7bbkRlfqjjK4IuabBtx/+Y8MtHPyGCXjbz/FVfdg6nwVrvByCRH/r4vdyuwyNrXg8zapcBWpt1zcYjIslpflDrCHuyHCBxwy8E0ZICCc4zLr1QcTLvpDC4MBHPY0DqcmGGn63inpNDcb3Djk8hyBn4nsJzxXUl9z6bd3cklJiekjohphM/HGlo4cNvBMPihDkeaGDw+sOAuU1RjCqLO1PeVwYMxwGuyWLnV6sl07w4W0Pg7ifG39vB4K+M8/Oa940POZO3C+kUHfST7otfY3NeeNZOLUgX2V/0bm93Xjp3IV9zP2p5u4Ysf2TSdonDbxnN6KzJXbU/IAv4idSUkXamFppxoDPL4Kzwff3ciu+r48LdpN3Z3H4zLUcmezBcnfIpjebr7BrjdQ1x61s9gGnxuvUCVAnyT6Li64p6yK2itKRdyvFZk4zf7eJ0eAkdg8exDAAAAc3B1ZalBXfBMYAEAAAAwgT8CDACfxJ99loqVDQAAAABJRU5ErkJggg==");
        game.load.image("playbutton", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAYAAAB1h9JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFERTI5NUU4NjhEOTExRTVBNDczQzRBMTkyOUFGQkYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFERTI5NUU5NjhEOTExRTVBNDczQzRBMTkyOUFGQkYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QURFMjk1RTY2OEQ5MTFFNUE0NzNDNEExOTI5QUZCRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QURFMjk1RTc2OEQ5MTFFNUE0NzNDNEExOTI5QUZCRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5l6qPwAAAHoUlEQVR42uyd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");
        game.load.image("menubutton", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdENjg1RjVENjhEQjExRTVBNEJBQzNBMEMyMjEyMzAwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdENjg1RjVFNjhEQjExRTVBNEJBQzNBMEMyMjEyMzAwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0Q2ODVGNUI2OERCMTFFNUE0QkFDM0EwQzIyMTIzMDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q2ODVGNUM2OERCMTFFNUE0QkFDM0EwQzIyMTIzMDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6nb2YGAAAAo0lEQVR42mL8//9/KAMDQxoD/UEFEJ9lBDrgHZAhOAAO2APErkwDZDkcMDEMMAA54N4A2f0eRIDSgBKQDh0AB8wCOQLkAIYRnwZGtgNYgHhAEyHIAbuhjqA3MAbiMKYBspwBVgIPikT4fqATYfoAVscMoyXhqANYkAoFeraM7sHbIcBEuPv/wIAOUAYARYHLAIW+8WgihDmgc4DsBvULGAACDAA0B55U5ocSZgAAAABJRU5ErkJggg==");
        game.load.image("resetgame", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAAwCAYAAACi0LByAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5NzA1OTI0NjhERTExRTVBNzg0RDA5ODU4MTVCRTNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5NzA1OTI1NjhERTExRTVBNzg0RDA5ODU4MTVCRTNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3MDU5MjI2OERFMTFFNUE3ODREMDk4NTgxNUJFM0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3MDU5MjM2OERFMTFFNUE3ODREMDk4NTgxNUJFM0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5bVT8rAAAFaElEQVR42uxc7ZGcOBDFLv9fMlgyWDI4OQLjCBZHYELAERyOwNoIjCMwG4GZDNgMcAQcVLXq+vr0xQCz6533qrq8M6BGaj1a3S2N30zTlADAa8VbmAAAwQEABAcAEBwAQHAAAMEBAAQHQHAAAMEBAAQHABAcAEBwAADBAeD5CJ7OUs3SzTLOMpEsf7ezlHSPrR0A7IY3BxyXrYncN4H7fs/S0P0L9CzFLGqWPuI5yvH9QHINyMlmGUlCTmUgRzKC4PsRPCXj3q1s90gTck+fvzDS+zAFdFaRL8qfCEXOIWTrr2TLEQQ/jtxPzKMuXuY2oGstwU9sArn+E3m4l+p50zNXmyW8+8Y+n1goaHQrtoKe6PN1knwh+A7STP9HN4uy3Kvomgt15DMNlEW/QbXT+PaWbuVYjZRsbKPDvouks2h2b/9C7XC4vN1pufxs8cKKPItER9dOB72zi/4H5tFfC1IKS0z+4rJvQt66ZHYYrjWBf7eDjlJ8fogIMfQZsfoaDGy5fi3giXsRmV+UdF9zrTH4HgS/F5WRKmKi7g8eV8hzp4z8MXGwiWH7FXrHZN8kt2QJdLeiXQy51Yb+ZjTufgfdanfbbYxxMoonjcTElLlow6Wl+HFLDF56YnAZmxoMjni2oliXx722Pvr0FiJX6ZjOgT6XgbGmB+QVqSV34uMzcyJta/pbUv9524bpbi22yB19qYWdjb7NY/2TEwieQHX07yS+T8WEDsLgso0SL69BS2ImQQu9vdArk+hCJJdrE2vleaHPldZSFJjY+AwkESc23t4ypoa+H+mafAmkc9Diendm0eHVEnyyELv2GFJ6kowZdbBUhrRYfUZh9NpR1eBebNxYRVlDcB+UZZXTwlaVaGMjuFxJbFWbjF0vHO14P0qhjz8ru2aCa4eRXEt8GSBQLkioA/0YPWTNLF78JRC8ZV7bFTKEPHjsWOWKwcfce/qRBmx7kTJhnvz3rAmXMbKK0Yg2a6Fpxy6hDZDc0U+e5HZCasu9DUuiB2qXWfTyyobUqynx3lrRGRxjsW7eCXkvyoc8mdMem/rQB/rYRra5Y4mqtF27YsyHVVGKxH3m5IY61gcy8M+WCTinhKbIYB3pdem6i6gKmEn6SJO97I7+TfKDKhqjqC0fXfZ8on4UK8t+uYVkNxZSush6zvW1uA3scJ9dwz/yuOxDhCdoVnqO0Mv2myavW+HhpNTCEy2E/8Q2pj44+rlG7zkwz/wrcR80sxHDlG1/7EmcnfE+YDv10gj+FKiHpzRhH0QNfcuGxMBqxXeChENEjbxwLIUj6crJoxuSp+JFKjweVO1g04aFO+2K8O/W4kweA31WFyL2UyAEyTx9fFaC39JyWAovkbLdNbnZUyfbDwQtE/+Fxc4lI/ijZ+NjMfD3WX4xY1fULnPEkbnwjLXFI+b0EvzcOlFkm4qFGJ1lF5kTo2U2fhAvY8tspCzO51I7n9pju5T6+X3T6rexklFPcRhEPVRCb6iiKM9hJl4VUaLmW5A0lvp2JjZjarbJIct+/N6e7lMOvVsPW8nSmumfJl21pY6sHRWKQdT5a9bnMVBFqQNz4uNK7ejHwGxXs+/7FZt/u5cJa2FIPa2H3lgmVIESE99cKCw7Zq5+5I57baf4cs8LrHc8Tcif10Y4lTKgo3eML78QwY2D6D17GukWjm49D56zcljF4romCZ/7NnF6e+GEJk3+/RUMX7L7iHvNT+4Gz3mRGL1HjiVhpbbY5DxnIdil58OVA+3SlyN+ssY7rCwJRG+pcwLAITiS4ADw7MB/GwGA4AAAggMACA4AIDgAgOAAAIIDIDhMAIDgAACCAwAIDgAgOADshX8EGAAO4op+FszNegAAAABJRU5ErkJggg==");
        game.load.image("thankyou", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAAwCAYAAACi0LByAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5QTk2MkJENjhERjExRTU4RkI4RTEyODJEQUJDMjVGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5QTk2MkJFNjhERjExRTU4RkI4RTEyODJEQUJDMjVGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjlBOTYyQkI2OERGMTFFNThGQjhFMTI4MkRBQkMyNUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjlBOTYyQkM2OERGMTFFNThGQjhFMTI4MkRBQkMyNUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz640ZbzAAAEbklEQVR42uyb/1GjQBTH1xv/h6sgXAXGCsQKTAdiBaYDSQVyFRg7iBUcqUCsQKzgSAU5GN+bvNvZ5UcCAZLvZ+aNCPuTfPft2wUuttutAuBU+YFbACBwACBwACBwACBwACBwACBwAIEDAIEDAIEDAIEDAIEDAIEDUM3lEerwyQpiMgCOwkXHr8sGub1o5x5yW/bQVznIhsg0Nze3lAyMQOBZbo52bkM/5KFCrQsLmjt6MdDfomjnTW6L3MIT1VtAluQ2N1yPaKDPKc2gQhSPLBONcwzpHOpEsqfX+tN0EMOPDQaPBnHZLHZzoAPsbJEZkPje6biMhNK8U54Avz3ogq52UV5ItAvDtYUlNm/ikXVjbkuuAQj8IIr46UMTeRGuvFLcvaHjTBP3B+UFoHXajMEzWgAWi6UrOvespbknk+L2KS8Agw9RWOQfNdIOQdxTVX9XhtO6R6hL9XxPPAj8MJH3Ke5CoCv1vW3Ii9yiHaEl/Ux97/Bw2r9qtwMU0IylL5JjsqZ12QTH5VWFcjOtbtMuBl/3DHVwOz+pnZGlnMjSb/36tHeFF/vgHVm4tRO2XBfj10iT5JblFtOxJNDyzLTrKdmWylhZ+rNPXbGhrCnl57LcivvgivSB4XokyuJzgdYuva0ptaOqrabrvkUTccN8e9u5vovC4ULx95eYbQKDJ+IZ51rt9vqvyavf1ajLt9Q1r+m5i+cGbzVnvIxmDFP5ruhfJDw6Hxd1/BRtvaa2TlQ/T54HvU04ZObq/4dKqfiRb7TpfiKO5ZO1hM5VEWr5ZF1XNcX9SnXVDedCUf5U609R3pcQbETn1oY6uI8bKmsOgY+D2HAutYiMvXdqyfNWUdeqZl16HP0uxB007F9KgtW9eKh5b9nHqKSspZYWAj8xyjxn0kF9V4YQqSmRGCwuhR0T8sYy3JjU6EcmwhkI3AI/6Dk13A7K/C3i9H13IlYUijg0A7AnX2oDdtNAvE12vG7OTeBJR96uS1LxY7kl4UQXM4ZPIncOEHkowpQ7y4yQWBbXkqDEy3sNB30xwG5L4vk5XU/GJvAxsqoIFUIxxQ9R5Cvy0NzGV0P8z/26t4h8aQltEi0EMg0I03ono35kJf1uNdaHwMtFthAC4B0Q3hl5UvWe2PYl8kwTZWQZBLxQfqE6QrJU7V6rCLTBwWU5dC84T1HfsxhQpgHzTHlcg+f/pOutvZt0CR1XTvPFjX8kT/aoxcqZKt/ua0vkMdUT0/91p3AW0bokz4z6+UThmIyfv9Tuaa0evj2QECeUV7JW5duKTkVo09rapssvekLR8bW2+BjbVyuemHpT+sHTEbT5k45vVfWneh7NEFMRXiQVi0t+eORqYUlccR9taXyyZVv3t0uBu2r3zoMvOp8qvEF4rNnnibywd643oetvMl21+ySNR3AGcXcO33NH9feR91kIHPTrvQ/9wHv0YBflNAlKdk7gwcHowxNeKFYtEiFwABCiAACBAwCBAwCBAwCBAwCBAwgcgBHzT4ABAOR9hYyt7fAmAAAAAElFTkSuQmCC");
    },
    create: function(){
        game.state.start("GameTitle");
    }
}

////////////////////////////////////////////////////////////////////////////////

var gameTitle = function(game){}

gameTitle.prototype = {
    create: function(){
        var title = game.add.sprite(game.width / 2, 60, "gametitle");
        title.anchor.set(0.5);
        var grid = game.add.sprite(game.width / 2, 130, "gridedition");
        grid.anchor.set(0.5);
        var playButton = game.add.button(game.width / 2, game.height / 2 + 100, "playbutton", function(){});
        playButton.anchor.set(0.5);
        menuGroup = game.add.group();
        var menuButton = game.add.button(game.width / 2, game.height - 30, "menubutton", toggleMenu);
        menuButton.anchor.set(0.5);
        menuGroup.add(menuButton);
        var resetGame = game.add.button(game.width / 2, game.height + 50, "resetgame", function(){});
        resetGame.anchor.set(0.5);
        menuGroup.add(resetGame);
        var thankYou = game.add.button(game.width / 2, game.height + 130, "thankyou", function(){});
        thankYou.anchor.set(0.5);
        menuGroup.add(thankYou);
    }
}

function toggleMenu(){
    if(menuGroup.y === 0){
        var menuTween = game.add.tween(menuGroup).to({
            y: -180
        }, 500, Phaser.Easing.Bounce.Out, true);
    }
    if(menuGroup.y === -180){
        var menuTween = game.add.tween(menuGroup).to({
            y: 0
        }, 500, Phaser.Easing.Bounce.Out, true);
    }
}