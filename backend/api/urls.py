from django.urls import path, include
from .views import (
    CreateCustomUserApiView,
)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from api.views import ListCustomUsersApiView, ComplaintViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"complaints", ComplaintViewSet, basename="complaints")

urlpatterns = [
    path("register", CreateCustomUserApiView.as_view(), name="signup"),
    path("login", TokenObtainPairView.as_view(), name="signin"),
    path("refresh", TokenRefreshView.as_view(), name="refresh"),
    path("users", ListCustomUsersApiView.as_view(), name="user-list"),
]

urlpatterns += router.urls
