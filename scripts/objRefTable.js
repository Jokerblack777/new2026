const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.TiledBg,
		C3.Behaviors.wrap,
		C3.Behaviors.solid,
		C3.Plugins.Browser,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Платформер: 0},
	{СледитьЗа: 0},
	{BoundTo: 0},
	{Спрайт2: 0},
	{ТайловыйФон: 0},
	{maxresdefault: 0},
	{Заворачивание: 0},
	{Спрайт: 0},
	{Твёрдый: 0},
	{Спрайт3: 0},
	{Спрайт4: 0},
	{Браузер: 0},
	{Клавиатура: 0}
];

self.InstanceType = {
	Спрайт2: class extends self.ISpriteInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	maxresdefault: class extends self.ISpriteInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Браузер: class extends self.IInstance {},
	Клавиатура: class extends self.IInstance {}
}