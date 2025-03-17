from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('users/', include(('users.urls', 'users'), namespace='users')),
    path('api/', include(('api.urls', 'api'), namespace='api')),
    path('api-schema/', SpectacularAPIView.as_view(), name='schema'),
    # Optional UI:
    path('api-docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')), # Catch all url
    # path('complaints/', include(('complaints.urls', 'complaints'), namespace='complaints'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)