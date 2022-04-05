@extends('themes.default.layouts.email') 
@section('local-css')
<style>
a {
    background-color: #27425f;
    color: white;
    padding: 1em 1.5em;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>
@endsection

@section('header')
    {{-- <img align="center"
    alt="Image" border="0" class="center fixedwidth"
    src="{{config('app.url').'/themes/listiva/images/logo-name.png'}}"
    style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; border: 0; height: auto; float: none; width: 40%; display: block;"
    title="Image" width="203" /> --}}
@endsection
@section('content')
<div style="background-color:#fdfdfd;">
    <div class="block-grid"
        style="Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#FFFFFF"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#FFFFFF;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 35px; padding-left: 35px; padding-top:35px; padding-bottom:40px;"><![endif]-->
            <div class="col num12"
                style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top;;">
                <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                        style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:35px; padding-bottom:40px; padding-right: 35px; padding-left: 35px;">
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                            style="color:#132F40;font-family:'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                            <div
                                style="font-size: 12px; line-height: 14px; color: #132F40; font-family: 'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                <p style="font-size: 14px; line-height: 26px; margin: 0;"><span
                                style="font-size: 16px;"><strong>Hi {{$user->firstname}} {{($user->lastname != null)?$user->lastname:''}},</strong></span>
                                </p>
                                <p style="font-size: 14px; line-height: 26px; margin: 0;"><span
                                        style="font-size: 16px;"> Your subscription payment to <a href="{{env('APP_URL')}}">{{env('APP_NAME', 'Properos')}}</a> could not be processed. The card x{{$last_4}} was declined.
                                     Please <a href="mailto:support@nvi.com">contact us</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 30px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                            style="color:#555555;font-family:'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:150%;padding-top:5px;padding-right:10px;padding-bottom:30px;padding-left:10px;">
                            <div
                                style="font-size: 12px; line-height: 18px; color: #555555; font-family: 'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                <p style="font-size: 14px; line-height: 21px; margin: 0;">
                                    Regards,
                                    </p>
                                <p style="font-size: 14px; line-height: 21px; margin: 0;">
                                {{env("APP_NAME", "PROPEROS")}}</p>
                            </div>
                        </div>
                        <hr>
                        <div
                            style="color:#555555;font-family:'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:150%;padding-top:5px;padding-right:10px;padding-bottom:30px;padding-left:10px;">
                            <div
                                style="font-size: 12px; line-height: 18px; color: #555555; font-family: 'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                <p style="font-size: 12px; line-height: 21px; margin: 0;">
                                    <a href="{{env('APP_URL')}}/login" style="background-color: #fff!important; color:blue; padding: 0;">{{env('APP_URL')}}/login</a> 
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--[if mso]></td></tr></table><![endif]-->
                </div>
                <!--<![endif]-->
            </div>
        </div>
        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
    </div>
</div>
</div>
<div style="background-color:#fdfdfd;">
    <div class="block-grid two-up no-stack"
        style="Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: border-color;;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color:border-color;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:border-color"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="300" style="background-color:border-color;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 25px; padding-top:15px; padding-bottom:15px;"><![endif]-->
            <div class="col num12" style="display: table-cell; vertical-align: top;">
                <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                        style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:15px; padding-right: 0px; padding-left: 25px;">
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                            style="color:#F8F8F8;font-family:'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                            <div
                                style="font-size: 12px; line-height: 14px; color: #F8F8F8; font-family: 'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                <p
                                    style="font-size: 12px; line-height: 16px; margin: 0; text-align: center">
                                    <strong>{{config('app.name')}} - {{date('Y')}} - All rights
                                reserved</strong></p>
                            </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            <!--[if (mso)|(IE)]></td><td align="center" width="300" style="background-color:border-color;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
        </div>
    </div>
</div>
<div style="background-color:#fdfdfd;">
    <div class="block-grid"
        style="Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;;">
        <div
            style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
            <div class="col num12"
                style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top;;">
                <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                        style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <table border="0" cellpadding="0" cellspacing="0" class="divider"
                            role="presentation"
                            style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                            valign="top" width="100%">
                            <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                    <td class="divider_inner"
                                        style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; border-collapse: collapse;"
                                        valign="top">
                                        <table align="center" border="0" cellpadding="0"
                                            cellspacing="0" class="divider_content" height="30"
                                            role="presentation"
                                            style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-top: 0px solid transparent; height: 30px;"
                                            valign="top" width="100%">
                                            <tbody>
                                                <tr style="vertical-align: top;" valign="top">
                                                    <td height="30"
                                                        style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-collapse: collapse;"
                                                        valign="top"><span></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
        </div>
    </div>
</div>
@endsection