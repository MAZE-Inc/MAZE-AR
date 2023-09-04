# MAZE-AR

AR Core와 AR Kit 이용하여 AR View를 보여주게 됩니다.AR View를 그리는데 필요한 파일이 Android와 Ios가 각각 달라 해당 파일을 서버로부터 전달받아 App에서 render하게 됩니다.

AR View를 render할 때 두가지 이상의 파일을 한번에 render하려고 하면 render속도와 성능이 저하되기 때문에 UX적으로 좋지 않습니다. 그렇기 때문에 저희는 메뉴의 갯수에 따라 동적으로 AR View를 그리게 되고, 하나의 화면에 한 가지의 AR을 보여주고 다음 버튼을 통해 다른 AR View를 보여주게 됩니다.

![ar cup](https://github.com/MAZE-Choiji/MAZE-AR/assets/113877093/e042da99-86fc-4155-b7f4-67966356ea09)

![ar pie](https://github.com/MAZE-Choiji/MAZE-AR/assets/113877093/1bb4503a-6b24-4cee-8f7c-ec8d13fac39f)
