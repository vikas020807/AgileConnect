@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
@else
<img src="{{asset('img/Logo.svg')}}" class="logo" alt="AgileConnect Logo">
{{ $slot }}
@endif
</a>
</td>
</tr>
