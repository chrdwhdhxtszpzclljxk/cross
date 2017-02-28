/**
 * Created by zhanglei on 16/8/1.
 */
var AlertViewTest = ca.CAViewController.extend({
    ctor: function () {
        this._super();

        var btn1 = ca.CAButton.create(ca.CAButtonType.RoundedRect);
        btn1.setLayout(DLayout(DHorizontalLayout_W_C(240, 0.5), DVerticalLayout_H_C(54, 0.25)));
        btn1.setTag(100);
        btn1.setTitleForState(ca.CAControlState.Normal, "Click-1");
        btn1.setTitleColorForState(ca.CAControlState.Normal, ca.color(51,204,255,255));
        btn1.addTarget(function () {
          var alertView = ca.CAAlertView.createWithText("Alert","this is a alert!","close",null);
          alertView.show(this.alerCallback);
          // alertView.setTarget(this, this.alerCallback);
        }, ca.CAControlEvents.TouchUpInSide);
        this.getView().addSubview(btn1);

        var btn2 = ca.CAButton.create(ca.CAButtonType.RoundedRect);
        btn2.setLayout( DLayout(DHorizontalLayout_W_C(240, 0.5), DVerticalLayout_H_C(54, 0.5)));
        btn2.setTag(200);
        btn2.setTitleForState(ca.CAControlState.Normal, "Click-2");
        btn2.setTitleColorForState(ca.CAControlState.Normal, ca.color(51,204,255,255));
        btn2.addTarget(function () {
          var alertView = ca.CAAlertView.createWithText("Alert", "this is a alert!", "ok","close",null);
          alertView.show();
          alertView.setTarget(this, this.alerCallback);
        },ca.CAControlEvents.TouchUpInSide);
        this.getView().addSubview(btn2);

        var btn3 = ca.CAButton.create(ca.CAButtonType.RoundedRect);
        btn3.setLayout( DLayout(DHorizontalLayout_W_C(240, 0.5), DVerticalLayout_H_C(54, 0.75)));
        btn3.setTag(300);
        btn3.setTitleForState(ca.CAControlState.Normal, "Click-3");
        btn3.setTitleColorForState(ca.CAControlState.Normal, ca.color(51,204,255,255));
        btn3.addTarget(function () {
          var alertView = ca.CAAlertView.createWithText("Alert", "message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,!", "ok","close","button3","button4","button5","button6","button7",null);
          alertView.show();
          alertView.setTarget(this, this.alerCallback);
        }, ca.CAControlEvents.TouchUpInSide);
        this.getView().addSubview(btn3);

    },
    alerButtonCallback: function (btn, point) {
        var tag = btn.getTag();
        switch (tag) {
            case 100:
                var alertView = ca.CAAlertView.createWithText("Alert","this is a alert!","close",null);
                alertView.show();
                alertView.setTarget(this, this.alerCallback);
                break;
            case 200:
                var alertView = ca.CAAlertView.createWithText("Alert", "this is a alert!", "ok","close",null);
                alertView.show();
                alertView.setTarget(this, this.alerCallback);
                break;
            case 300:
                var alertView = ca.CAAlertView.createWithText("Alert", "message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,message is so long,!", "ok","close","button3","button4","button5","button6","button7",null);
                alertView.show();
                alertView.setTarget(this, this.alerCallback);
                break;
        }


    },
    alerCallback: function (btnIdex) {
        log("btnIndex==" + btnIdex);
    },
});
